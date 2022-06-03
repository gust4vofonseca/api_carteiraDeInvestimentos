import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateWalletUseCase } from "./CreateWalletUseCase";

class CreateWalletController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.user;
        const { name } = request.body;

        const createWalletUseCase = container.resolve(CreateWalletUseCase);

        await createWalletUseCase.execute({
            name,
            user_id: id
        })

        return response.status(201).send();
    }
}

export { CreateWalletController };
