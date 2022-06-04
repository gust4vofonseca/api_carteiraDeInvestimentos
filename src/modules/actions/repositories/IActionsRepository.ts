import { ICreateActionsDTO } from "../dtos/ICreateActionsDTO";
import { Actions } from "../infra/typeorm/entities/Actions";


export interface IActionsRepository  {
    create(data: ICreateActionsDTO): Promise<void>;
    update(actions: Actions): Promise<void>;
    delete(id: string): Promise<void>;
    findById(id: string): Promise<Actions>;
    findByWalletId(wallet_id: string): Promise<Actions[]>;
    findByInitials(initials:string, wallet_id: string): Promise<Actions[]>;
}