import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

interface IRequest {
    name?: string;
    email?: string;
    password?: string;
}

@injectable()
class UpdateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository,
    ) {}

    async execute(id: string, {name, email, password}: IRequest): Promise<void> {
        const user = await this.usersRepository.findById(id);

        if(!user) {
            throw new Error("User already exists!");
        }

        if (email) {
            const emailAlready = await this.usersRepository.findByEmail(email);
    
            if (emailAlready) {
                throw new Error("Email already exists!");
            }

            user.email = email;
        }

        if (password) {
            const passwordHash = await hash(password, 8);
            
            user.password = passwordHash;
        }

        if (name) {
            user.name = name;
        }

        await this.usersRepository.update(user);
    }
}

export { UpdateUserUseCase }