class CreateLibraries < ActiveRecord::Migration[5.2]
  def change
    create_table :libraries do |t|
      t.string :title
      t.string :desc
      t.string :markdown
      t.integer :user_id

      t.timestamps
    end
  end
end
