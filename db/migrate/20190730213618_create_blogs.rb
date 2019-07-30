class CreateBlogs < ActiveRecord::Migration[5.2]
  def change
    create_table :blogs do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.string :handle, null: false

      t.timestamps
    end
    add_index(:blogs, :user_id)
    add_index(:blogs, :handle, unique: true)
  end
end
