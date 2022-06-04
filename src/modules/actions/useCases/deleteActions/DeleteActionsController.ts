import { Request, Response } from "express"; 
import { container } from "tsyringe";
import { DeleteActionsUseCase } from "./DeleteActionsUseCase";

class DeleteActionsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id, wallet_id } = request.body;
        const user = request.user;

        const deleteActionsUseCase = container.resolve(DeleteActionsUseCase);

        await deleteActionsUseCase.execute(
            id,
            wallet_id,
            user.id
        );

        return response.status(201).send();
    }
}

export { DeleteActionsController };
