class DropBlogColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :posts, :blog_id
  end
end
