import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

// デコレーター(クラスをデー子レーションする関数)
@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      '削除済み',
    ),
    AuthModule,
  ],
  // リクエスト(url)が来た時に何を返すかを決める
  controllers: [AppController],
  providers: [AppService],
})
// クラス
export class AppModule {}
