import { ICreateActionsDTO } from "@modules/actions/dtos/ICreateActionsDTO";
import { IActionsRepository  } from "@modules/actions/repositories/IActionsRepository";
import { getRepository, Repository } from "typeorm";
import { Actions } from "../entities/Actions";


class ActionsRepository implements IActionsRepository  {

    private repository: Repository<Actions>;

    constructor() {
        this.repository = getRepository(Actions);
    }



    async create({name, initials, value, quantity, purchase, wallet_id }: ICreateActionsDTO): Promise<void> {
        const actions = await this.repository.create({
            name, 
            initials, 
            value, 
            quantity, 
            purchase: purchase ? true : false, 
            wallet_id
        });

        await this.repository.save(actions);
    }
    
    async update(actions: Actions): Promise<void> {
        await this.repository.save(actions);
    }
    
    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }

    async findByInitials(initials:string, wallet_id: string): Promise<Actions[]> {
        const actionsWallet = await this.repository.find({wallet_id});

        const actions = actionsWallet.filter(action => action.initials === initials);

        return actions;
    }
    
    async findById(id: string): Promise<Actions> {
        const action = await this.repository.findOne(id);

        return action;
    }
    
    async findByWalletId(wallet_id: string): Promise<Actions[]> {
        const actions = await this.repository.find({wallet_id});

        return actions;
    }
}

export { ActionsRepository };
