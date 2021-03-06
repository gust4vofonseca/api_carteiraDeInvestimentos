import { User } from "@modules/accounts/infra/typeorm/entities/User";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class UserInformationUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository,
    ) {}

    async execute(id: string): Promise<User> {
        const user = await this.usersRepository.findById(id);

        if (!user) {
            throw new Error("User not exists!")
        }

        return user;
    }   
}

export { UserInformationUseCase }