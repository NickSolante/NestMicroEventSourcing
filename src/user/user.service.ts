import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {User} from "./entities/user.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {UserRepository} from "./repository/user.repository";

@Injectable()
export class UserService {
  constructor(
      @InjectRepository(UserRepository)
      private userRepository: UserRepository
  ) {
  }

  async create(createUserDto: CreateUserDto) {
    await this.userRepository.createUser(createUserDto)

    return 'This action adds a new user';
  }

  // findAll() {
  //   return `This action returns all user`;
  // }
  //
  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }
  //
  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }
  //
  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
