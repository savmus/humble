class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.integer :blog_id, null: false
      t.integer :author_id, null: false
      t.string :title
      t.string :url
      t.string :caption
      t.text :summary
      t.text :description
      t.string :post_status, null: false
      t.string :post_type, null: false
      t.datetime :publish_date

      t.timestamps
    end
    add_index(:posts, :blog_id)
    add_index(:posts, :author_id)
  end
end
