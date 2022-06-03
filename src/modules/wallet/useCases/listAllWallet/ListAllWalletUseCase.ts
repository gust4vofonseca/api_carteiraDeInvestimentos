import { Wallet } from "@modules/wallet/infra/typeorm/entities/Wallet";
import { IWalletRepository } from "@modules/wallet/repositories/IWalletRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListAllWalletUseCase {
    constructor(
        @inject("WalletRepository")
        private walletRepository: IWalletRepository,
    ) {}

    async execute(user_id: string): Promise<Wallet[]> {
        const wallets = await this.walletRepository.findByUserId(user_id);

        return wallets;
    }
}

export { ListAllWalletUseCase };
