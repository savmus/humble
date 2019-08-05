class AddFollowIndex < ActiveRecord::Migration[5.2]
  def change
    add_index(:follows, :followee_id)
  end
end
