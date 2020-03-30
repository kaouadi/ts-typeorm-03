import {EntitySchema} from "typeorm";

export const UserEntity = new EntitySchema({
    name: "user",
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true
        },
        firstname: {
            type: String
        },
        lastname: {
            type: String

        },
        age: {
            type: Number
        }
    }
});