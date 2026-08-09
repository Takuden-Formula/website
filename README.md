# website — 拓殖大学電気自動車同好会 (TAKUDEN) 公式サイト

Jimdo（[takuden.jimdofree.com](https://takuden.jimdofree.com/)）で運用している公式サイトの
HTMLコード置き場です。

## 構成

| パス | 内容 |
|------|------|
| `jimdo-top/takuden.html` | トップページ用ウィジェット。Jimdoの「HTML」ブロックに中身を丸ごと貼り付けて使う |

## 使い方（Jimdoへ反映）

1. Jimdo管理メニュー → 対象ページの「HTML」ブロックを編集
2. 中身を全消しして `jimdo-top/takuden.html` の中身を全部貼り付け
3. 保存 → プレビューで確認

## メモ

- Tailwindには依存しない自己完結CSS（`#takuden-wrapper` スコープでJimdo側CSSに上書きされない設計）
- アクセント色はネオンオレンジ `#FF6B00`
- 画像はJimdoのCDN（`image.jimcdn.com`）を参照
- Instagramフィードは POWR ウィジェット（`powr.js`）を使用
