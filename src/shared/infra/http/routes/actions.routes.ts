import { CreateActionsController } from "@modules/actions/useCases/createActions/CreateActionsController";
import { DeleteActionsController } from "@modules/actions/useCases/deleteActions/DeleteActionsController";
import { PortfolioStocksController } from "@modules/actions/useCases/portfolioStocks/PortfolioSotcksController";
import { SearchActionsController } from "@modules/actions/useCases/searchAction/SearchActionsController";
import { UpdateActionsController } from "@modules/actions/useCases/updateActions/UpdateActionsController";
import { Router } from "express";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticated";

const actionsRoutes = Router();


const createActionsController = new CreateActionsController();
const deleteActionsController = new DeleteActionsController();
const updateActionsController = new UpdateActionsController();
const searchActionsController = new SearchActionsController();
const portfolioStocksController = new PortfolioStocksController();

actionsRoutes.post("/", ensureAuthenticate, createActionsController.handle);
actionsRoutes.post("/delete", ensureAuthenticate, deleteActionsController.handle);
actionsRoutes.post("/update", ensureAuthenticate, updateActionsController.handle);
actionsRoutes.post("/portfolio", ensureAuthenticate, portfolioStocksController.handle);
actionsRoutes.post("/search", ensureAuthenticate, searchActionsController.handle);

export { actionsRoutes };
