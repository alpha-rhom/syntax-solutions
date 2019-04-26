class CreateUserLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :user_likes do |t|
      t.integer :user_id
      t.integer :library_id
      t.integer :value

      t.timestamps
    end
  end
end
