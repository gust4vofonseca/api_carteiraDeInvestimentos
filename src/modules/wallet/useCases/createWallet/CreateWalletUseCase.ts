import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { ICreateWalletDTO } from "@modules/wallet/dtos/ICreateWalletDTO";
import { IWalletRepository } from "@modules/wallet/repositories/IWalletRepository";
import { inject, injectable } from "tsyringe";


@injectable()
class CreateWalletUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository,

        @inject("WalletRepository")
        private walletRepository: IWalletRepository
    ) {}

    async execute({name, user_id}: ICreateWalletDTO): Promise<void> {
        const user = await this.usersRepository.findById(user_id);

        if (!user) {
            throw new Error("User not exists!")
        }

        await this.walletRepository.create({name, user_id});
    }
}

export { CreateWalletUseCase };
