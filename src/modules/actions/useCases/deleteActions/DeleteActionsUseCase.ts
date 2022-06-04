import { IActionsRepository } from "@modules/actions/repositories/IActionsRepository";
import { IWalletRepository } from "@modules/wallet/repositories/IWalletRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteActionsUseCase {
    constructor(
        @inject("ActionRepository")
        private actionsReposiroty: IActionsRepository,
        @inject("WalletRepository")
        private walletRepository: IWalletRepository
    ) {}

    async execute(id: string, wallet_id: string, user_id: string): Promise<void> {
        const wallet = await this.walletRepository.findById(wallet_id);

        if (wallet.user_id !== user_id) {
            throw new Error("wallet does not belong to the user!")
        }

        const action = await this.actionsReposiroty.findById(id);

        if (action.wallet_id !== wallet_id) {
            throw new Error("Wallet not exists!")
        }

        if (!action) {
            throw new Error("Action not exists!")
        }

        await this.actionsReposiroty.delete(id);
    }
}

export { DeleteActionsUseCase };
