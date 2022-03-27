import { Injectable } from '@nestjs/common';
// コントローラーのインスタンス生成で必要
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
