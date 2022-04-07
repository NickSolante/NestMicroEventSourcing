import { EntityRepository, Repository } from 'typeorm';
import {CreateUserDto} from "../dto/create-user.dto";
import {User} from "../entities/user.entity";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async createUser(
        createUserDto: CreateUserDto,
    ): Promise<User> {
        const { userId, name } = createUserDto;
        const user = new User();
        user.userid = userId;
        user.name = name;
        await user.save();
        return user
    }
}
