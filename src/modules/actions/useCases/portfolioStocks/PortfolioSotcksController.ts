import { Request, Response } from "express";
import { container } from "tsyringe";
import { PortfolioStocksUseCase } from "./PortfolioStocksUseCase";

class PortfolioStocksController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { wallet_id } = request.body;
        const { id } = request.user;

        const portfolioStocksUseCase = container.resolve(PortfolioStocksUseCase);

        const actions = await portfolioStocksUseCase.execute(wallet_id, id);

        return response.json(actions);
    }
}

export { PortfolioStocksController };