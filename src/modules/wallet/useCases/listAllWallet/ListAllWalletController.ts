import {Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllWalletUseCase } from "./ListAllWalletUseCase";

class ListAllWalletController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.user;

        const listAllWalletUseCase = container.resolve(ListAllWalletUseCase);

        const wallets = await listAllWalletUseCase.execute(id);

        return response.json(wallets);
    }
}

export { ListAllWalletController };
