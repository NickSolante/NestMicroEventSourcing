import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @EventPattern('create_user')
  create(data:any) {
    return this.userService.create(data.value);
  }

  // @EventPattern('findAllUser')
  // findAll() {
  //   return this.userService.findAll();
  // }
  //
  // @EventPattern('findOneUser')
  // findOne(@Payload() id: number) {
  //   return this.userService.findOne(id);
  // }
  //
  // @EventPattern('updateUser')
  // update(@Payload() updateUserDto: UpdateUserDto) {
  //   return this.userService.update(updateUserDto.id, updateUserDto);
  // }
  //
  // @EventPattern('removeUser')
  // remove(@Payload() id: number) {
  //   return this.userService.remove(id);
  // }
}
