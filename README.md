# website — 拓殖大学電気自動車同好会 (TAKUDEN) 公式サイト

Jimdo（[takuden.jimdofree.com](https://takuden.jimdofree.com/)）で運用している公式サイトのコード置き場です。

**方式**: サイト本体のコードはこのリポジトリに置き、**GitHub Pages** で配信します。
Jimdoには小さな「ローダー」だけを貼り、そこからPagesの `takuden.js` を読み込みます。
→ **更新はこのリポジトリを編集して `git push` するだけ**（数分でサイトに反映。Jimdoは触らない）。

## 構成

| パス | 内容 |
|------|------|
| `jimdo-top/takuden.js` | **トップページ本体**（CSS＋HTML＋動作を全部内包）。`#takuden-root` に描画 |
| `jimdo-top/preview.html` | トップページのローカル確認用 |
| `fsaej/fsaej.js` | **「What's FSAEJ?」ページ本体**。`#fsaej-root` に描画 |
| `fsaej/preview.html` | FSAEJページのローカル確認用 |
| `joinus/joinus.js` | **「Join Us」ページ本体**。`#joinus-root` に描画 |
| `joinus/preview.html` | Join Usページのローカル確認用 |
| `contact/contact.js` | **「Contact」ページ本体（公式SNS）**。`#contact-root` に描画 |
| `contact/preview.html` | Contactページのローカル確認用 |

## Jimdoに貼るコード（トップページのHTMLブロック）

これ**だけ**を貼る（一度貼れば以後は貼り替え不要）:

```html
<div id="takuden-root"></div>
<script>
(function(){var s=document.createElement('script');s.src='https://takuden-formula.github.io/website/jimdo-top/takuden.js?v='+Date.now();document.head.appendChild(s);})();
</script>
```

> `?v='+Date.now()` を付けることで、ブラウザキャッシュを毎回回避し**更新が常に即反映**される。
> （キャッシュを効かせたい運用に切り替えたくなったら、`?v=` を固定番号にして更新時だけ数字を上げる方式でもよい）

## Jimdoに貼るコード（What's FSAEJ? ページのHTMLブロック）

```html
<div id="fsaej-root"></div>
<script>
(function(){var s=document.createElement('script');s.src='https://takuden-formula.github.io/website/fsaej/fsaej.js?v='+Date.now();document.head.appendChild(s);})();
</script>
```

## Jimdoに貼るコード（Join Us ページのHTMLブロック）

```html
<div id="joinus-root"></div>
<script>
(function(){var s=document.createElement('script');s.src='https://takuden-formula.github.io/website/joinus/joinus.js?v='+Date.now();document.head.appendChild(s);})();
</script>
```

## Jimdoに貼るコード（Contact ページのHTMLブロック）

```html
<div id="contact-root"></div>
<script>
(function(){var s=document.createElement('script');s.src='https://takuden-formula.github.io/website/contact/contact.js?v='+Date.now();document.head.appendChild(s);})();
</script>
```

## 更新の流れ

1. `jimdo-top/takuden.js` を編集
2. `git commit` → `git push`
3. 1〜数分後、GitHub Pagesがビルドしサイトに自動反映（Jimdoの再貼り付けは不要）

> 反映されないときはブラウザのスーパーリロード（Ctrl+F5）でキャッシュを更新。

## ローカルで確認

```
cd jimdo-top
python -m http.server 8000
# → http://localhost:8000/preview.html
```

## メモ（設計上の要点）

- **Jimdoは静的な `<style>` を削除する**ため、CSSは `takuden.js` 内から動的注入している。詳細は個人メモ参照。
- Tailwind非依存の自己完結CSS（`#takuden-wrapper` スコープでJimdo側CSSに上書きされない）
- アクセント色はネオンオレンジ `#FF6B00`
- 画像はJimdoのCDN（`image.jimcdn.com`）を参照
- Instagramフィードは POWR ウィジェット（`powr.js`）を `takuden.js` から動的読み込み
