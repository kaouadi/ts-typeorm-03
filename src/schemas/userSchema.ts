import {EntitySchema} from "typeorm";

export const UserEntity = new EntitySchema({
    name: "user",
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