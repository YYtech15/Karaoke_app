# KaraokeApp
このアプリは難易度別のカラオケ曲を紹介してくれたり、カラオケの得点を記録したり出来るアプリです。

This application introduces karaoke songs by difficulty level and allows you to record your karaoke scores.

# 使用対象者(Who Uses Size Limit)
- 学生
- 社会人
- カラオケで歌うのが好きな人
- カラオケの歴代得点を記録として残したい人

- Students
- Working people
- People who like to sing at karaoke
- People who want to keep a record of their all-time karaoke scores.
# デモ(DEMO)
デモ動画URL:

# 機能(Features)
 - 難易度別のカラオケ曲を紹介してくれる
（難易度は千鳥の鬼レンチャンというテレビ番組の情報を基にしています）
 - 曲を検索して、その曲の歌詞などを調べる事が出来ます。
 - ログインをすることで、カラオケで歌った曲の記録をTwitterのような形式で残す事が出来ます。

- This app introduces karaoke songs by difficulty level.
(Difficulty levels are based on information from a TV program called Chidori's Onirenchan)
 - You can search for a song and look up its lyrics and other information.
 - By logging in, you can keep a record of the songs you have sung at karaoke in a Twitter-like format.

# 追加予定機能(Features to be added)
- ルームを作成し、友達と一緒にカラオケで遊ぶ時に色々なゲームが楽しめるようにする。
 - ルーム内で各自がスコアを記録することで、そのルームでのカラオケの得点ランキングが表示される。
 - ジャンル（年代、カテゴリー）などだけがランダムに言われ、そのジャンルの歌を歌わせる
 - 飲みゲーが出来る
- カラオケの得点記録を折れ線グラフの表にして、曲ごとの得点の推移を確認できるようにする。 

- Create a room so that you can enjoy various games when playing karaoke with your friends.
- Each person in the room records his or her score, and a ranking of karaoke scores in that room is displayed.
- Only the genre (age, category, etc.) is said at random, and the player is asked to sing a song in that genre.
- You can play drinking games.
- Make a line graph table of karaoke score records so that people can see how their scores change from song to song. 
- Create a room so that you can enjoy various games when playing karaoke with your friends.

# 開発環境(Development Environment)
- node v18.13.0
- Python 3.11.1
- Windows 11

# 実行に必要な環境（Requirement Environment）

- node > v18
- Python > 3.11


# Installation
## frontend
- node.jsのインストール

- install node.js
https://nodejs.org/ja/download/
## backend
- Pythonのインストール
- install Python
https://www.python.org/downloads/

# Usage
## frontend

```bash
1. git clone https://github.com/YYtech15/Karaoke_app.git
2. cd karaoke
3. npm install
4. npm run dev
```
## backend
```bash
1. git clone https://github.com/YYtech15/karaoke_app_backend.git
2. pip install -r requirements.txt

3. create mysql user
   1. create user your_name@localhost identified with mysql_native_password by 'your_password';
   2. grant all on *.* to your_name@localhost;

4. create file .env
   1. DB_USER = your_name
   2. DB_PASSWORD = your_password
   3. DB_HOST = localhost
   4. DB_PORT = 3306
   5. DB_NAME = (ex)karaoke_API_development

5. python setup_db.py
6. pythom migrate_db.py
7. uvicorn main:app --host localhost
```
# システム構成(System Configurations)
## frontend
### React, TypeScript, Vercel, VITE
[![My Skills](https://skillicons.dev/icons?i=react,ts,vercel,vite)](https://skillicons.dev)
## backend
### Python, FastAPI, GoogleCloudPlatform
[![My Skills](https://skillicons.dev/icons?i=py,fastapi,gcp)](https://skillicons.dev)

# URL
## frontend
https://karaoke-app-three.vercel.app/

## backend

# Author

- YY
- Nagoya.Univ
- midori1140flower@gmail.com

# License

"karaokeApp" is under [MIT license](https://en.wikipedia.org/wiki/MIT_License).

# FAQ
- 質問がある方はこちらのメールにご連絡ください。
(midori1140flower@gmail.com)
- If you have any questions, please contact us at this email address.
(midori1140flower@gmail.com)
# Version History
2023/3/12 version 0.0.1
