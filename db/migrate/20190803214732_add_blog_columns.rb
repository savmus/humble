class AddBlogColumns < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :blog_title, :string
    add_column :users, :blog_description, :string
  end
end
