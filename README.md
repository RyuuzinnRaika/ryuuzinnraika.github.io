# Ryuuzinn Raika — Personal Website

[GitHub](https://github.com/RyuuzinnRaika) での活動を紹介する、静的な個人サイトです。

## 特徴

- 日本語中心の、読みやすい1ページ構成
- きらら系の日常アニメを思わせるパステル文房具風の配色（外部画像は使用しない）
- 中学・高校時代から現在までの経歴・活動年表を掲載（工業高校から石川県内の工業系大学、2024年のVPN構築・ICTSC予選を含む）
- 自宅サーバーの構成・用途と、保有・取得した資格・検定、顕彰を掲載
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

- `index.html`：文章、作品リンク、見出し、経歴年表（`#history`）、自宅サーバー（`#homelab`）、資格・顕彰（`#certifications`）
- `style.css`：色、文字、レイアウト、スマートフォン対応
- `favicon.svg`：タブのアイコン
- `REQUIREMENTS.md`：サイトの要件・公開ポリシー

## 公開前に確認すること

氏名、具体的な学校名、メールアドレス、非公開の技術情報は載せていません。資格は本人の過去の申告に基づき、取得年月・免状交付状況・施工管理技術検定の合格段階などは明記していません。

このサイトは個人制作物の非公式な紹介サイトであり、Minecraftおよびその他の商品・サービスとの公式な提携を示すものではありません。