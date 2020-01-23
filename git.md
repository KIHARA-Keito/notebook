(←戻る)[https://github.com/KIHARA-Keito/notebook]

# 初期化

$ git init //対象フォルダにて初期化

# ステージング、コミット

$ git status //変更ファイルの表示

$ git add aaa.txt //指定ファイルをステージング
$ git add . //変更あるファイルをすべてステージング

$ git commit -m 'コメント' //コミット

$ git diff aaa.txt //指定したファイルの差分
$ git diff --cashed aaa.txt //add後に表示させる場合
$ git diff //全ファイルの差分表示

# ブランチ作成

$ git branch //ブランチ一覧

$ git checkout -b develop //「develop」というブランチを作成・移動

$ git checkout master //masterブランチに切り替え

$ git log //現ブランチの履歴表示
$ git log --oneline --graph --branches //すべてのブランチのコミット履歴をグラフ表示

# マージ

$ git merge B //今いるブランチにBブランチの差分を取り込む

例）
$ git merge develop //masterにいる状態だとmasterにdevelopブランチの差分を取り込む

# コンフリクト解消

マージするとコンフリクト発生のメッセージがでる
$ git merge B

対象ファイルを開いて正しい内容でadd・commitする
（<,=,>,HEADはすべて削除すること）

$ <<<<<<<<<<<< HEAD
$ 現在の変更
$ ============
$ 入力側の変更
$ >>>>>>>>>>>>

# 【使用しない】特定のバージョンに戻す（git reset）

$ git reset <コミットハッシュ> //コミット時のハッシュを指定してそこまでのコミットを削除してしまう、ファイルはそのまま

$ git reset --hard <コミットハッシュ> //コミット時のハッシュを指定してそこまでのコミットを削除してしまう、ファイルも戻される

# 特定のバージョンに戻す（git revert）

$ git revert //ひとつ前のコミットと逆の操作でコミットすることで元に戻す、ただしひとつずつしか戻せないので複数戻す場合はその回数分行う必要がある

$ git revert --abort //間違えて複数戻った場合のコンフリクト解消

また、マージのコミットのrevertは以下のようにしないとエラーになる
あまり使わないので参考までに

$ git revert -m 1 <コミットハッシュ> //マージされた側
$ git revert -m 2 <コミットハッシュ> //マージする側

# ブランチ切り替え操作以外に覚えておくと良いgit checkout

## 特定のファイルを指定のコミットハッシュまで戻す

$ git checkout <コミットハッシュ> <対象ファイル名>

戻した内容でコミットすれば終了

## 指定のコミットハッシュ時のファイルの内容を表示させる

$ git show <コミットハッシュ>:<対象ファイル名>

## ステージングに追加前の修正ファイルを元に戻す（変更作業を元に戻す）

$ git checkout <対象ファイル名>

## ステージング後に修正ファイルを元に戻す

$ git reset <対象ファイル名>
でステージングから戻した後に
$ git checkout <対象ファイル名>
する

# 特定のディレクトリ・ファイルをバージョン管理から外す（gitignore）

.gitignoreを作成

https://www.gitignore.io/

# コミット済みのファイルをバージョン管理から外す方法

## ファイルは残しつつバージョン管理から外す

$ git rm --cached <対象ファイル名>

## ファイルは削除してバージョン管理からも外す

$ git rm <対象ファイル名>

# ローカルリポジトリをGitHubにアップする

- ローカル対象フォルダで git init する
- GitHub上でリポジトリ作成する

$ git remote add origin <github上のURL指定>
$ git remote -v //設定確認

$ git push -u origin master

このあとユーザー名とパスワードを聞かれるので入力

# クローンする場合

$ git clone <github上のURL指定>
$ git clone <github上のURL指定> <任意のフォルダ名>

# リモートリポジトリの最新版をローカルリポジトリに反映させる

$ git pull



