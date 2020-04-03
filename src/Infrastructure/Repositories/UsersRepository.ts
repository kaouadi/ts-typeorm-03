import { BaseRepository } from "../../Utils/Repositories/BaseRepository";
import {User} from "../../Domain/User"

export class UsersRepository extends BaseRepository {

    public async save(user: User): Promise<User> {

        return await this.EntityManager.save(user);

    }

    public async find(): Promise<User[]> {
        return await this.EntityManager.find(User);
    }


    
}