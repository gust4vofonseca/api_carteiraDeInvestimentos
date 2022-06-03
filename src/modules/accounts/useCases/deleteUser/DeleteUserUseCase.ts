import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteUserUseCase {
    constructor(
        @inject("UsersRepository")
        private userRepository: UsersRepository,
    ) {}

    async execute(id: string): Promise<void> {
        const user = await this.userRepository.findById(id);

        if (!user) {
            throw new Error("User already exists!");
        }

        await this.userRepository.delete(id);
    }
}

export { DeleteUserUseCase };
