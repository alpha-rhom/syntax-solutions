class ChangeColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :comments, :card_id, :library_id
  end
end
