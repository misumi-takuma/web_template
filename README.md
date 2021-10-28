## 練習用テンプレート

※ 一連の動作は確認してますが、実案件運用できるかまでは確認してないので、まだ使用しないでください。
もしくは十分に検証してから使ってください。

ライブラリの関係上 Node のバージョンは 14 系を使ってください

## ディレクトリ構成

```
├── README.md
├── babel.config.js // JavaScriptのPoryfillの設定
├── config.js // 開発環境に関する設定
├── dest // 書き出し先フォルダ
│   ├── css
│   │   └── style.css
│   ├── images
│   ├── index.html
│   └── js
│       └── bundle.js
├── gulpfile.js // gulpのタスクを書いているファイル
├── package.json // パッケージの依存関係や実行コマンドを書いているファイル
├── src // 開発フォルダ
│   ├── html
│   │   └── index.html
│   ├── images
│   │   └── xps-g2E2NQ5SWSU-unsplash.jpg
│   ├── js
│   │   └── index.js
│   └── scss
│       ├── base.scss
│       └── style.scss
├── webpack.config.js // JavaScriptのバンドルの設定を書いたファイル
└── yarn.lock // プロジェクトが依存してるパッケージのバージョンを正確に記録してるファイル
```

## コマンド

```
// セットアップ
yarn

// CSSとJSを非圧縮で開発するコマンド
yarn dev

// CSSとJSを圧縮しつつ開発するコマンド
yarn prod

// ビルドコマンド（CSS、JSの圧縮）
yarn build
```

## HTML

HTML は EJS や Pug などのテンプレートエンジンは使ってません。
書いたそのままの HTML が dest にコピーされます。

## SCSS

SCSS でコードを書ける環境にしています。よく分からない場合は、`style.scss`に CSS を全部書いても OK です。
できれば入れ子や、コード分割して import なども挑戦してみましょう。
ソースマップ書き出すようにしてるので、要素検証で活用してください

## JavaScript

JavaScript を書けるようにしています。jQuery は入れてません。
課題では JS を使った表現までは必要ないですが、

## Images

画像は png、jpg、svg、gif の圧縮に対応してます。

## パッケージ一覧

`gulp-imagemin` と `imagemin-svgo` が Node14 系だとエラーになるためバージョンを下げています。

## 不具合や要望があれば連絡ください！
