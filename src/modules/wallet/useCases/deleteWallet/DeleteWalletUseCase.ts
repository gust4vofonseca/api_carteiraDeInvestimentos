import { IWalletRepository } from "@modules/wallet/repositories/IWalletRepository";
import { inject, injectable } from "tsyringe";


@injectable()
class DeleteWalletUseCase {

    constructor(
        @inject("WalletRepository")
        private walletRepository: IWalletRepository,
    ) {}

    async execute(id: string, user_id: string): Promise<void> {
        const wallet = await this.walletRepository.findById(id);

        if (wallet.user_id !== user_id) {
            throw new Error("User not permision!")
        }

        await this.walletRepository.delete(id);

    }
}

export { DeleteWalletUseCase };
