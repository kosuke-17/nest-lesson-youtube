import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';
import * as bycrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  // mongooseものモデルを扱う
  // ModelはDocumentの方でないといけないかもしれないので、Userをextendsしている
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}
  users: CreateUserDto[] = [];
  async create(user: CreateUserDto) {
    const createdUser = new this.userModel({
      username: user.username,
      password: await bycrypt.hash(user.password, 12),
    });
    return await createdUser.save();
    // this.users.push(user);
  }
  // ユーザー一覧の取得
  async findAll() {
    // findメソッドはawaitで受け取れないので、execがあると良いらしい(非同期になる)
    return await this.userModel.find({}).exec();
  }
  // 特定のユーザー情報の取得
  async findOne(username: string) {
    // findメソッドはawaitで受け取れないので、execがあると良いらしい(非同期になる)
    const user = await this.userModel.findOne({ username }).exec();
    if (!user) {
      // nestjsで用意されているエラーをきれいに返してくれるオブジェクト
      throw new NotFoundException('ユーザーが見つかりませんでした');
    }
    return user;
  }
}
