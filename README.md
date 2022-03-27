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
