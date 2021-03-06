# fwywd-portfolio

[fwywd 社](https://fwywd.com/)が公開している[採用試験](https://fwywd.com/news/recruitment)の[１次試験](https://fwywd.com/news/recruitment-1st)である Next.js を利用したポートフォリオ制作に挑戦しました。

## 挑戦した理由

### フロントエンドエンジニア転身を目指しているため

現在、都内 SIer で DevOps エンジニアとして勤務しています。
自分の将来を見据え自分 1 人であっても長く生きていくことができるスキルを身につけるため、フロントエンドエンジニアになりたいと考えるようになりました。

### 採用試験で求められるスキルセットが自分が身につけたいと思っていた技術と一致していたため

フロントエンドの勉強を開始するにあたり、React と Vue のどちらかを選択する必要がありました。
最終的に以下の理由から React を選択しました。

- 長期的にフロントエンド開発者としてのレベルアップを図りたい
- 型安全な Java を使ったバックエンド開発に慣れているため、 Typescript との相性が良い方を選択したい
- React を勉強してから Vue は理解しやすいが、その逆は難しいためと考えられている

### Next.js の初学者のアウトプットとの場として最適と思えたため

Zenn や Qiita などを通して React や Next.js のチュートリアル開発をいくつか行った後、自分の手で１からコーディングする場が欲しいと考えていました。仕様が与えられてそれに沿ったサイトを開発するというお題がないか調べていたところ、

- 成果物が明確
- 画像などの素材が提供されている
- レスポンシブ対応も可能
- 今後メジャーな技術となるかもしれない Tailwind CSS も経験できる

以上を踏まえ、React + Next.js + Typescript で学習を進めていた矢先に本採用試験を知り、実装の勉強に集中したいフロントエンド初学者向けの挑戦課題として理想的な内容であると感じたためアウトプットの機会として利用しようと考えました。
というように、挑戦することにしました。

## 躓いた・悩んだポイント

フロントエンド開発 初学者の私が本課題をこなす上で悩んだポイントを共有します。

### HTML/CSS

- padding と margin の使い分けが分からない
- 画像の位置を調整するために、親要素ではな画像のクラくスに直接 CSS を当てようとしてしまい解決に時間を要することに
- HTML のタグで何かと div を使いがち

### Next.js

- 最適なディレクトリ構成が分からない
- Image コンポーネントに設定する height と width に何を設定すれば良いのか分からない
- favicon の画像は、images ディレクトリではなく public 配下に直接おくは位置する必要がある
- JSX に直接テキストを入力するか、または日本語の文章や画像パスを変数化して JSX から分離させるべきかのベストプラクティスが分からない
- 画像などのファイルパスが'/'の有無などで大きく変わるため、適切な設定をするのに時間がかかる

### Tailwind CSS

- Tailwind CSS の独自テーマ設定で、試験で与えられたカラーセットに対応する config ファイルの設定方法が分からない

## 一次試験の進め方

HTML/CSS の技術力に不安があったため、いきなり Next.js で作成するのではなくピュアな HTML/CSS でサイトを作成することから始めました。その後、SCSS での実装に変更しつつ GitHub Pages にアップロードした静的サイトのパフォーマンス向上を施しました。

制作物の方向性を理解できてから、Next.js での実装を行いました。

またレスポンシブ対応は任意でしたが、今後の Web アプリ制作においてレスポンシブ対応は必須用件であると考えたため、先にモバイルのレイアウトを作成した上で PC 版のレイアウトに対応させました。

## 感想

Next.js + Tailwind CSS で静的サイトを作成する課題として、期待通りの要求内容だったと感じています。

実際に Web アプリを作成する際には、Hooks や API を利用することが必須になると思われるため、今後そのような技術スタックを扱える課題があるとありがたいと思います。

また、ポートフォリオ制作を採用試験に取り入れることで、面接では聞きづらい応募者の人となりも同時に把握することができるポイントが優れていると感じました。今後フロント系の採用においてこのような形式が選択される可能性があると思います。

## 反省点

コードの完成度を気にするあまり、丸３日も掛けてしまいました。

Next.js などを技術で Web サイトの全体像を作り上げることが重要であるにもかかわらず、細部のコード最適化に時間をかけてしまった点は反省したいです。

## 今後

Next.js を利用したアプリ開発をどんどん進めていく予定です。

具体的には以下の技術スタック・課題から試してみようと思っています。

- Contentful を利用した技術ブログの作成
- Material UI を利用したアプリ作成
- fwywd 採用試験 ２次試験(公開され次第)
