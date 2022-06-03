import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Wallet } from "./Wallet";
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
    purchaseQuantity: number;

    @Column()
    value: number;

    @Column()
    purchase: boolean;

    @Column()
    wallet_id: string;

    @ManyToOne(() => Wallet)
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