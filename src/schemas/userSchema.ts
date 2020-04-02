import {EntitySchema} from "typeorm";
import {User} from "../entity/User";
import { User2 } from "../entity/User2";

export const UserEntity = new EntitySchema({
    name: "user",
    target: User2,
    tableName: "user",
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true
        },
        firstName: {
            type: String
        },
        lastName: {
            type: String

        },
        age: {
            type: Number
        }
    }
});