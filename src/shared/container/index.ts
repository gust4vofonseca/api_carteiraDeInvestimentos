import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { WalletRepository } from "@modules/wallet/infra/typeorm/repositories/WalletRepository";
import { IWalletRepository } from "@modules/wallet/repositories/IWalletRepository";
import { ActionsRepository } from "@modules/actions/infra/typeorm/repositories/ActionsRepository";
import { IActionsRepository } from "@modules/actions/repositories/IActionsRepository";
import { container } from "tsyringe";

container.registerSingleton<IUsersRepository>("UsersRepository", UsersRepository);

container.registerSingleton<IWalletRepository>("WalletRepository", WalletRepository);

container.registerSingleton<IActionsRepository>("ActionRepository", ActionsRepository);