import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {User} from "./entities/user.entity";

@Injectable()
export class UserService {

  async create({userId, name}: CreateUserDto) {
    let list = new User();
    list.userid = userId
    list.name = name
    await list.save()

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