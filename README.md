# データベース設計

## usersテーブル

| Column | Type   | Options     |
| ------ | ------ | ----------- |
| name   | string | null: false |

### Association
- has_many :messages
- has_many :groups, through: :users_groups


## groupsテーブル

| Column | Type   | Options     |
| ------ | ------ | ----------- |
| name   | string | null: false |

### Association
- has_many :users, through: :users_groups
- has_many :messages
- has_many :users_groups

## messagesテーブル

| Column     | Type       | Options                         |
| ---------- | ---------- | ------------------------------- |
| body       | text       |                                 |
| image      | text       |                                 |
| user_id    | references | null: false, foreign_key: true  |
| group_id   | references | null: false , foreign_key: true |

### Association
- belongs_to :user
- belongs_to :group
- 

## membersテーブル

| Column   | Type    | Options                        |
| -------- | ------- | ------------------------------ |
| user_id  | integer | null: false, foreign_key: true |
| group_id | integer | null: false, foreign_key: true |

### Association
- belongs_to :group
- belongs_to :user
  