# Ryuuzinn Raika — Personal Website

[GitHub](https://github.com/RyuuzinnRaika) での活動を紹介する、静的な個人サイトです。

## 特徴

- 日本語中心の、読みやすい1ページ構成
- 中学・高校時代から現在までの経歴・活動年表を掲載（時期が不明な経験は別記）
- PC・スマートフォン対応
- フレームワーク、ビルドツール、追跡タグ、外部フォント不要
- 公開リポジトリは実リンクを掲載。非公開リポジトリへのリンクは掲載しない
- GitHub Pages（ブランチから公開）対応

## ローカル確認

`index.html` をブラウザーで開くか、Python がある場合はこのディレクトリで次を実行します。

```sh
python -m http.server 8000
```

`http://localhost:8000/` を開いて確認できます。

## GitHub Pages に公開する

1. GitHubで **`ryuuzinnraika.github.io`** という **Public** リポジトリを新規作成します（ユーザー名に大文字があってもリポジトリ名は小文字にします）。
2. このディレクトリのファイルを、新規リポジトリの `main` ブランチ直下にアップロードします。`.nojekyll` も含めます。
3. `Settings > Pages > Build and deployment` で `Deploy from a branch` を選び、`main`・`/(root)` を選択して保存します。
4. 公開完了後、`https://ryuuzinnraika.github.io/` にアクセスします。

### コマンド例（作成済みリポジトリに初回push）

```sh
git init
git add .
git commit -m "Create personal website"
git branch -M main
git remote add origin https://github.com/RyuuzinnRaika/ryuuzinnraika.github.io.git
git push -u origin main
```

※ コマンドは空のリポジトリ向けです。すでにREADMEなどがある場合は先にクローンしてください。

## 編集する場所

- `index.html`：文章、作品リンク、見出し、経歴年表（`#history`）
- `style.css`：色、文字、レイアウト、スマートフォン対応
- `favicon.svg`：タブのアイコン
- `REQUIREMENTS.md`：サイトの要件・公開ポリシー

## 公開前に確認すること

氏名、学校名、メールアドレス、非公開の技術情報などは、公開する意思がある場合にだけ掲載してください。

このサイトは個人制作物の非公式な紹介サイトであり、Minecraftおよびその他の商品・サービスとの公式な提携を示すものではありません。