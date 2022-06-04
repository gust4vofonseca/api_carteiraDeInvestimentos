import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Wallet } from "@modules/wallet/infra/typeorm/entities/Wallet";
import { v4 as uuidV4 } from "uuid";

@Entity("actions")
class Actions {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    initials: string;

    @Column()
    quantity: number;

    @Column({type: "float"})
    value: number

    @Column()
    purchase: boolean;

    @Column()
    wallet_id: string;

    @ManyToOne(() => Wallet, {
        cascade: true,
    })
    @JoinColumn({name: "wallet_id"})
    wallet: Wallet;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Actions };