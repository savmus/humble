class AddFollowColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :follows, :followee_id, :integer, null: false
  end
end
