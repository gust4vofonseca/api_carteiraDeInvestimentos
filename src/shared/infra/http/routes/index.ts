import { Router } from "express";
import { actionsRoutes } from "./actions.routes";
import { authenticateRoutes } from "./authenticate.routes";
import { usersRoutes } from "./users.routes";
import { walletRoutes } from "./wallet.routes";

const router = Router();

router.use("/user", usersRoutes);
router.use("/wallet", walletRoutes);
router.use("/actions", actionsRoutes);
router.use(authenticateRoutes);

export { router };