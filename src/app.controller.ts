import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {EventPattern} from "@nestjs/microservices";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('update_account')
  handleUpdateUserInfo(data: any){
    this.appService.handleUpdateUserInfo(data.value);
  }

  @EventPattern('create_account')
  createUpdateUserInfo(data: any){
    this.appService.handleUpdateUserInfo(data.value);
  }
}
