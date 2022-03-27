import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  findAll() {
    return this.usersService.findAll();
  }
  // クエリパラメータを用いた特定のユーザー情報の取得
  @Get(':username')
  @UseGuards(AuthGuard('jwt'))
  findOne(@Param('username') username: string) {
    return this.usersService.findOne(username);
  }
  // ValidationPipeがdtoからきたデータが正しいかをバリデーションしてくれる
  @Post()
  create(@Body(ValidationPipe) createUser: CreateUserDto) {
    return this.usersService.create(createUser);
  }
}
