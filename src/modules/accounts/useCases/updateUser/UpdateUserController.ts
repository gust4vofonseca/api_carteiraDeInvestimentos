import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

class UpdateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body;
        const { id } = request.user;

        const updateUserUseCase = container.resolve(UpdateUserUseCase);

        updateUserUseCase.execute(id, {name, email, password});

        return response.status(201).send();
    }
}

export { UpdateUserController };
