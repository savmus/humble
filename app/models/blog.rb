# == Schema Information
#
# Table name: blogs
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  title      :string           not null
#  handle     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Blog < ApplicationRecord
    validates :user_id, :title, presence: true
    validates :handle, presence: true, uniqueness: true

    belongs_to :user,
        class_name: "User",
        foreign_key: :user_id

    has_many :posts,
        class_name: "Post",
        foreign_key: :blog_id
end
