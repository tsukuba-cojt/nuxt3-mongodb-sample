# Nuxt 3 + MongoDB Minimal starter

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.


## MongoDB について

Windows版MongoDBをインストールする必要があるが、初回戸惑ったのでメモ

### ダウンロード

```
https://www.mongodb.com/try/download/community
```

### インストール後、パスを通す

以下の例のように、binディレクトリのパスを通す、バージョンが違う場合があるので注意。

```
set PATH=%PATH%;C:\Program Files\MongoDB\Server\6.0\bin
```

### コマンドプロンプト等で実行

```
mongod
```


