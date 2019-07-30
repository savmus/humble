# == Schema Information
#
# Table name: posts
#
#  id           :bigint           not null, primary key
#  blog_id      :integer          not null
#  author_id    :integer          not null
#  title        :string
#  url          :string
#  caption      :string
#  summary      :text
#  description  :text
#  post_status  :string           not null
#  post_type    :string           not null
#  publish_date :datetime
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Post < ApplicationRecord
    validates :blog_id, :author_id, :post_status, :post_type, presence: true

    belongs_to :blog,
        class_name: "Blog",
        foreign_key: :blog_id

    belongs_to :author,
        class_name: "User",
        foreign_key: :author_id
end
