import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { User } from "@modules/accounts/infra/typeorm/entities/User";

import { v4 as uuidV4 } from "uuid";

@Entity('wallet')
class Wallet {
    @PrimaryColumn()
    id: string;

    @Column()
    name: String;

    @Column()
    user_id: string;

    @ManyToOne(() => User, {
        cascade: true
    })
    @JoinColumn({name: "user_id"})
    user: User;

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    update_at: Date

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Wallet }