import { ICreateActionsDTO } from "@modules/actions/dtos/ICreateActionsDTO";
import { IActionsRepository } from "@modules/actions/repositories/IActionsRepository";
import { IWalletRepository } from "@modules/wallet/repositories/IWalletRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateActionsUseCase {
    constructor (
        @inject("WalletRepository")
        private walletRepository: IWalletRepository,
        @inject("ActionRepository")
        private actionRepository: IActionsRepository
    ) {}

    async execute ({name, initials, value, purchase, quantity, wallet_id}: ICreateActionsDTO, user_id: string): Promise<void> {
        const wallet = await this.walletRepository.findById(wallet_id);

        if (wallet.user_id !== user_id) {
            throw new Error("wallet does not belong to the user!")
        }


        if (!wallet) {
            throw new Error("Wallet not exists!")
        }

        await this.actionRepository.create({
            name, 
            initials, 
            value, 
            purchase, 
            quantity, 
            wallet_id
        });
    }
}

export { CreateActionsUseCase };
