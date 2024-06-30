import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>
    ) { }

    async create(userDTO: CreateUserDto): Promise<User> {
        const user = new User();
        user.username = userDTO.username;
        user.email = userDTO.email;
        user.name = userDTO.name;
        user.password = userDTO.password;

        console.log(user);
        return this.usersRepository.save(user); // return new user
    }
    async findOne(id: number): Promise<User> {
        return await this.usersRepository.findOneBy({ id })
    }
}
