import { Router } from "express";
import { authenticateRoutes } from "./authenticate.routes";
import { usersRoutes } from "./users.routes";
import { walletRoutes } from "./wallet.routes";

const router = Router();

router.use("/user", usersRoutes);
router.use("/wallet", walletRoutes);
router.use(authenticateRoutes);

export { router };