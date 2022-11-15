import {
    Entity,
    Column,
    CreateDateColumn,
    PrimaryColumn,
    OneToMany,
    JoinColumn,
    ManyToOne,
} from "typeorm";
import  {v4 as uuid} from "uuid";
import { Users } from "./userEntity";

@Entity("values")
export class Values {
    @PrimaryColumn()
    id: string;

    @Column()
    value: string;

    @Column()
    type_value: number;

    @Column()
    user_id: string;

    @ManyToOne(() => Users)
    @JoinColumn({ name: "user_id" })
    user: Users;

    @CreateDateColumn()
    created_at: Date;

    @Column()
    update_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}