import { ICreateWalletDTO } from "@modules/wallet/dtos/ICreateWalletDTO";
import { IWalletRepository } from "@modules/wallet/repositories/IWalletRepository";
import { getRepository, Repository } from "typeorm";
import { Wallet } from "../entities/Wallet";



class WalletRepository implements IWalletRepository {

    private repository: Repository<Wallet>

    constructor(){
        this.repository = getRepository(Wallet);
    }

    async create({name, user_id}: ICreateWalletDTO): Promise<void> {
        const wallet = this.repository.create({
            name,
            user_id
        })

        await this.repository.save(wallet);
    }

    async update(wallet: Wallet): Promise<void> {
        await this.repository.save(wallet);
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }

    async findByName({name, user_id}: ICreateWalletDTO): Promise<Wallet[]> {
        const walletUserId = await this.repository.find({user_id});

        const walletByName = walletUserId.filter(wallet => wallet.name === name);

        return walletByName;
    }

    async findById(id: string): Promise<Wallet> {
        const wallet = await this.repository.findOne(id);

        return wallet;
    }

    async findByUserId(user_id: string): Promise<Wallet[]> {
        const walletUserId = await this.repository.find({user_id});

        return walletUserId;
    }


}

export { WalletRepository };