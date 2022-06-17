import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IUserDTO } from '../dto/user.dto';

@Injectable()
export class UsersService {
  constructor(private configService: ConfigService) {}

  getAllUsers() {
    return `ALL users listed ${this.configService.get('DATABASE')}`;
  }

  getOneUser(userID) {
    return `User ID is: ${userID}`;
  }

  createUser(payload: IUserDTO) {
    return {
      message: `creating a user`,
      payload,
    };
  }

  editUser(userID, payload: IUserDTO) {
    return {
      message: 'Editing a user',
      userID,
      payload,
    };
  }
}
