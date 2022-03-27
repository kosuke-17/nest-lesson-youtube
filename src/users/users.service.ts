import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  // mongooseものモデルを扱う
  // ModelはDocumentの方でないといけないかもしれないので、Userをextendsしている
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}
  users: CreateUserDto[] = [];
  async create(user: CreateUserDto) {
    const createdUser = new this.userModel({
      username: user.username,
      password: user.password,
    });
    return await createdUser.save();
    // this.users.push(user);
  }
  // ユーザー一覧の取得
  async findAll() {
    return await this.userModel.find({});
  }
  // 特定のユーザー情報の取得
  // async findOne(username: string) {
  //   const user = await this.userModel.findOne({ username });
  //   return user;
  // }
}
