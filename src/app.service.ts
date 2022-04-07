import { Injectable } from '@nestjs/common';
import {AccountUpdateDto} from "./account-update.dto";

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  handleUpdateUserInfo(accountUpdatedEvent: AccountUpdateDto){
    console.log(accountUpdatedEvent)
  }
}
