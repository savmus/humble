# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  post_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Like < ApplicationRecord
    validates :user_id, :post_id, presence: true

    belongs_to :liker,
        class_name: "User",
        foreign_key: :user_id

    belongs_to :liked_post,
        class_name: "Post",
        foreign_key: :post_id
end
