class CreateGroups < ActiveRecord::Migration[5.0]
    class Group < ApplicationRecord
        has_many :group_users
        has_many :users, through: :group_users
        validates :name, presence: true, uniqueness: true
      end
    def change
      create_table :groups do |t|
        t.string :name, null: false
        t.index :name, unique: true
        t.timestamps
      end
    end
  end
