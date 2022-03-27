import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { JwtPayload } from './interfaces/jwt-payload.interface';

// パスポートで認証
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    // PassportStrategyが持っているコンストラクタ関数を継承する
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // 有効期限が切れているから無視するのはfalse
      ignoreExoiration: false,
      secretOrKey: 'secret',
    });
  }
  // PassportStrategyを利用した時に必ず必要になってくる
  async validate(payload: JwtPayload) {
    // ここのpayloadは重要
    return payload;
  }
}
