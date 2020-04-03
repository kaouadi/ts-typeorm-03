import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./domain/User";
import {UsersRepository} from "./infrastructure/repositories/UsersRepository";

/*
import {UserEntity} from "./schemas/UserSchema";
*/
createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;

    /*
    Case 1 :
    - option activate target into schema user to link domain user to schema user
     const userRepository = connection.getRepository(User);
    */

    /*
    Case 2 :
     const userRepository = connection.getRepository<User>('user')
    */

    /*
    Case 3
    - Customr repository
    */
    const userRepository = new UsersRepository()

    await userRepository.save(user);
    console.log("Saved a new user with id: " + user.id);
  
    console.log("Loading users from the database...");
    const users = await userRepository.find();
    console.log("Loaded users: ", users);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
