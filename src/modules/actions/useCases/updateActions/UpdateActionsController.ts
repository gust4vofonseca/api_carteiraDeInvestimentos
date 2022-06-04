import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateActionsUseCase } from "./UpdateActionsUseCase";

class UpdateActionsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const user = request.user;
        const { 
            id, 
            wallet_id, 
            name, 
            initials, 
            quantity, 
            value, 
            purchase
        } = request.body;
        const user_id = user.id;

        const updateActionsUseCase = container.resolve(UpdateActionsUseCase);

        await updateActionsUseCase.execute({
            id, 
            user_id,
            wallet_id, 
            name, 
            initials, 
            quantity, 
            value, 
            purchase
        })

        return response.status(201).send();
    }
}

export { UpdateActionsController };
