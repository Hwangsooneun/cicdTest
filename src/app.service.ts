import { Injectable } from '@nestjs/common';
import { UsersService } from './users/users.service';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('134134134')
    return 'Hello'
  }
}
