import { IWalletRepository } from "@modules/wallet/repositories/IWalletRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class UpdateWalletUseCase {
    constructor(
        @inject("WalletRepository")
        private walletRepository: IWalletRepository,
    ) {}

    async execute(id:string, name: string, user_id: string): Promise<void> {
        const wallet = await this.walletRepository.findById(id);

        if (wallet.user_id !== user_id) {
            throw new Error("User no permision!")
        }

        wallet.name = name;

        await this.walletRepository.update(wallet);
    }
}

export { UpdateWalletUseCase };
