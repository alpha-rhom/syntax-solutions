class AddLikesToLibraries < ActiveRecord::Migration[5.2]
  def change
    add_column :libraries, :likes, :integer
  end
end
