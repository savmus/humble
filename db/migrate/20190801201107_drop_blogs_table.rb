class DropBlogsTable < ActiveRecord::Migration[5.2]
  def up
    drop_table :blogs
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
