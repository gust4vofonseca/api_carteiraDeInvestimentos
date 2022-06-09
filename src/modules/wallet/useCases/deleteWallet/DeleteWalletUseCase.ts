import { IActionsRepository } from "@modules/actions/repositories/IActionsRepository";
import { IWalletRepository } from "@modules/wallet/repositories/IWalletRepository";
import { inject, injectable } from "tsyringe";


@injectable()
class DeleteWalletUseCase {

    constructor(
        @inject("WalletRepository")
        private walletRepository: IWalletRepository,
        @inject("ActionRepository")
        private actionsRepository: IActionsRepository,
    ) {}

    async execute(id: string, user_id: string): Promise<void> {
        const wallet = await this.walletRepository.findById(id);

        if (wallet.user_id !== user_id) {
            throw new Error("User not permision!")
        }

        if (!wallet) {
            throw new Error("Wallet not exists!")
        }

        const actions = await this.actionsRepository.findByWalletId(id);

        for(const action of actions) {
            await this.actionsRepository.delete(action.id);
        }

        await this.walletRepository.delete(id);

    }
}

export { DeleteWalletUseCase };
