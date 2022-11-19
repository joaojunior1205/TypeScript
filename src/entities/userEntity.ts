import {
    Entity,
    Column,
    CreateDateColumn,
    PrimaryColumn,
} from "typeorm";
import  {v4 as uuid} from "uuid";
import { v5 as uuid_token } from "uuid";

@Entity("users")
export class Users {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    last_name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    token: string;

    @CreateDateColumn()
    created_at: Date;

    @Column()
    update_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }

        if (!this.token) {
            const date = new Date();
            let timezone =  date.getTimezoneOffset()

            this.token = `${this.id}${timezone}`;
        }
    }
}