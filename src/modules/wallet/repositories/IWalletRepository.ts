import { ICreateWalletDTO } from "../dtos/ICreateWalletDTO";
import { Wallet } from "../infra/typeorm/entities/Wallet";


interface IWalletRepository {
    create(data: ICreateWalletDTO): Promise<void>;
    update(wallet: Wallet): Promise<void>;
    delete(id: string): Promise<void>;
    findByName(data: ICreateWalletDTO): Promise<Wallet[]>;
    findById(id: string): Promise<Wallet>;
    findByUserId(user_id: string): Promise<Wallet[]>;
}

export { IWalletRepository };
