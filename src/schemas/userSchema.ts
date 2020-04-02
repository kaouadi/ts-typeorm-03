import {EntitySchema} from "typeorm";
import {User} from "../entity/User";
import { User2 } from "../entity/User2";

export const UserEntity = new EntitySchema({
    name: "user",
    target: User,
    tableName: "user",
    columns: {
        _id: {
            type: Number,
            primary: true,
            generated: true
        },
        _firstName: {
            type: String
        },
        _lastName: {
            type: String

        },
        _age: {
            type: Number
        }
    }
});