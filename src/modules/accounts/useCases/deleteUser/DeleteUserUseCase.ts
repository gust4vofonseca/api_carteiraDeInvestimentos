import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { IActionsRepository } from "@modules/actions/repositories/IActionsRepository";
import { IWalletRepository } from "@modules/wallet/repositories/IWalletRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteUserUseCase {
    constructor(
        @inject("UsersRepository")
        private userRepository: IUsersRepository,
        @inject("WalletRepository")
        private walletRepository: IWalletRepository,
        @inject("ActionsRepository")
        private actionsRepository: IActionsRepository
    ) {}

    async execute(id: string): Promise<void> {
        const user = await this.userRepository.findById(id);

        if (!user) {
            throw new Error("User already exists!");
        }

        const wallets = await this.walletRepository.findByUserId(id);

        for (const wallet of wallets) {
            const actions = await this.actionsRepository.findByWalletId(wallet.id);

            for(const action of actions) {
                await this.actionsRepository.delete(action.id);
            }

            await this.walletRepository.delete(wallet.id);
        }

        await this.userRepository.delete(id);
    }
}

export { DeleteUserUseCase };
