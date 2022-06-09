import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteWalletUseCase } from "./DeleteWalletUseCase";


class DeleteWalletController {
    async handle(request: Request, response: Response): Promise<Response> {
        const  user  = request.user;
        console.log(user);
        const { id } = request.body; 

        const deleteWalletUseCase = container.resolve(DeleteWalletUseCase);

        deleteWalletUseCase.execute(id, user.id);

        return response.status(201).send();
    }
}

export { DeleteWalletController };
