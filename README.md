## ローカルでサーバーの起動

npm run start:dev

## 各ブロックを作成できる

nest g module users
nest g controller users
nest g service users

## デコレーター?アノテーション?

リクエストボティのデータ
@Body
パラメーター("user/:id")
@Param
クエリパラメーター("serch/?key="word")
@Query
リクエスト、レスポンス
@Request
@Response

## DTO(Data Transfer Object)

デザインパターンの一つ
クライアントから受け取るデータの型を定義するもの

### バリデーターとトランスフォーマーのサードパーティライブラリを使用

npm i --save class-validator class-transformer

## mongodb を利用するためのライブラリを導入

npm i mongoose @nestjs/mongoose
npm i -D @types/mongoose

## jwt を利用するためのライブラリ

npm i @nestjs/jwt

## パスワードをハッシュ化するライブラリ

npm i bcryptjs
npm i -D @types/bcryptjs

## パスポート.js

npm i @nestjs/passport passport-jwt
npm i -D @types/passport-jwt