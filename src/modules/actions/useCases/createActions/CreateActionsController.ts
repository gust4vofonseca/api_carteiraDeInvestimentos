import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateActionsUseCase } from "./CreateActionsUseCase";


class CreateActionsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            name,
            initials,
            value,
            purchase, 
            quantity, 
            wallet_id
        } = request.body;

        const user = request.user;

        const valueTest = parseFloat(value);

        const createActionsUseCase = container.resolve(CreateActionsUseCase);

        await createActionsUseCase.execute({
            name,
            initials,
            value: valueTest,
            purchase, 
            quantity: parseInt(quantity), 
            wallet_id
        }, user.id);

        return response.status(201).send();
    }
}

export { CreateActionsController };
