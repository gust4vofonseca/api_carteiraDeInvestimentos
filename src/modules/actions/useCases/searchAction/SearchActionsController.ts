import { Request, Response } from  "express";
import { container } from "tsyringe";
import { SearchActionsUseCase } from "./SearchActionsUseCase";

class SearchActionsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { initials, wallet_id } = request.body;
        const { id } = request.user;

        const searchActionsUseCase = container.resolve(SearchActionsUseCase);

        const actions = await searchActionsUseCase.execute(initials, wallet_id, id);

        return response.json(actions);
    }
}

export { SearchActionsController }