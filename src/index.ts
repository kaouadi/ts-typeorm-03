import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import {User2} from "./entity/User2";
/*
import {UserEntity} from "./schemas/UserSchema";
*/
createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    const user = new User2();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;

    const userRepository = connection.getRepository(User2);
   /*
    const userRepository = connection.getRepository<User>('user')
    */
    await userRepository.save(user);
    console.log("Saved a new user with id: " + user.id);
  
    console.log("Loading users from the database...");
    const users = await userRepository.find();
    console.log("Loaded users: ", users);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
