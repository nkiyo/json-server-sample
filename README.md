起動方法
```
npx json-server db.json --routes .\routes.json
```

データ取得方法

```
curl http://localhost:3000/hoge/huga/v1/xxx/comments/1
curl http://localhost:3000/hoge/huga/v1/xxx/comments
curl http://localhost:3000/comments/1 # routes.jsonの定義を経由しなくてもOK
```

TODO
- エラーデータ返す方法
- タイムアウト、〇秒待ってから返す方法
