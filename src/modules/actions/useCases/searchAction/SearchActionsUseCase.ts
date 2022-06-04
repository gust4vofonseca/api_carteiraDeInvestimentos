import { Actions } from "@modules/actions/infra/typeorm/entities/Actions";
import { IActionsRepository } from "@modules/actions/repositories/IActionsRepository";
import { IWalletRepository } from "@modules/wallet/repositories/IWalletRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class SearchActionsUseCase {
    constructor(
        @inject("ActionRepository")
        private actionRepository: IActionsRepository,
        @inject("WalletRepository")
        private walletRepository: IWalletRepository
    ) {}

    async execute(initials: string, wallet_id: string, user_id: string): Promise<Actions[]> {
        const wallet = await this.walletRepository.findById(wallet_id);

        if (wallet.user_id !== user_id) {
            throw new Error("wallet does not belong to the user!")
        }

        const actions = await this.actionRepository.findByInitials(initials, wallet_id);

        return actions;
    }
}

export { SearchActionsUseCase };
