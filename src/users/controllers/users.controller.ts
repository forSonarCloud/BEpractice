import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from '../service/users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get()
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Get(':userID')
  getOneUser(@Param('userID') userID: string) {
    return this.usersService.getOneUser(userID);
  }

  @Post()
  createUser(@Body() payload) {
    return this.usersService.createUser(payload);
  }

  @Put(':userID')
  editUser(@Param('userID') userID: string, @Body() payload) {
    return this.usersService.editUser(userID, payload);
  }
}
