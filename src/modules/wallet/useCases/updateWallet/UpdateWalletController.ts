import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateWalletUseCase } from "./UpdateWalletUseCase";

class UpdateWalletController {
    async handle(request: Request, response: Response): Promise<Response> {
        const user = request.user;
        const { id, name } = request.body;

        const user_id = user.id;

        const updateWalletUseCase = container.resolve(UpdateWalletUseCase);

        await updateWalletUseCase.execute(id, name, user_id);

        return response.status(201).send();
    }
}

export { UpdateWalletController };
