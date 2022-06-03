import { CreateWalletController } from "@modules/wallet/useCases/createWallet/CreateWalletController";
import { DeleteWalletController } from "@modules/wallet/useCases/deleteWallet/DeleteWalletController";
import { ListAllWalletController } from "@modules/wallet/useCases/listAllWallet/ListAllWalletController";
import { UpdateWalletController } from "@modules/wallet/useCases/updateWallet/UpdateWalletController";
import { Router } from "express";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticated";

const walletRoutes = Router();

const createWalletController = new CreateWalletController();
const deleteWalletController = new DeleteWalletController();
const updateWalletController = new UpdateWalletController();
const listAllWalletController = new ListAllWalletController();

walletRoutes.post('/', ensureAuthenticate, createWalletController.handle);
walletRoutes.post('/delete', ensureAuthenticate, deleteWalletController.handle);
walletRoutes.post('/update', ensureAuthenticate, updateWalletController.handle);
walletRoutes.post('/list', ensureAuthenticate, listAllWalletController.handle);

export { walletRoutes };
