import {EntitySchema} from "typeorm";
import {User} from "../entity/User";

export const UserEntity = new EntitySchema({
    name: "user",
    target: User,
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