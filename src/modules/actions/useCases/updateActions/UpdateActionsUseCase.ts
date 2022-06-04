import { IActionsRepository } from "@modules/actions/repositories/IActionsRepository";
import { IWalletRepository } from "@modules/wallet/repositories/IWalletRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
    id: string;
    wallet_id: string;
    user_id: string;
    name?: string;
    initials?: string;
    quantity?: number;
    value?: number;
    purchase?: boolean;
}

@injectable()
class UpdateActionsUseCase {
    constructor(
        @inject("ActionRepository")
        private actionsRepository: IActionsRepository,
        @inject("WalletRepository")
        private walletRepository: IWalletRepository
    ) {}

    async execute({id, wallet_id, user_id, name, initials, quantity, value, purchase}:IRequest): Promise<void> {
        const wallet = await this.walletRepository.findById(wallet_id);

        if (wallet.user_id !== user_id) {
            throw new Error("wallet does not belong to the user!")
        }

        const action = await this.actionsRepository.findById(id);

        if (action.wallet_id !== wallet_id) {
            throw new Error("stock does not belong to the portfolio")
        }

        if (name) {
            action.name = name;
        }

        if (initials) {
            action.initials = initials;
        }

        if (quantity) {
            action.quantity = quantity;
        }

        if (value) {
            action.value = value;
        }

        if (purchase) {
            action.purchase = purchase;
        }

        await this.actionsRepository.update(action);
    }   
}


export { UpdateActionsUseCase }