import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

// デコレーター(クラスをデー子レーションする関数)
@Module({
  imports: [UsersModule],
  // リクエスト(url)が来た時に何を返すかを決める
  controllers: [AppController],
  providers: [AppService],
})
// クラス
export class AppModule {}
