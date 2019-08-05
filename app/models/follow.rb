# == Schema Information
#
# Table name: follows
#
#  id          :bigint           not null, primary key
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  followee_id :integer          not null
#

class Follow < ApplicationRecord
    validates :user_id, :followee_id, presence: true

    belongs_to :follower,
        class_name: "User",
        foreign_key: :user_id

    belongs_to :followee,
        class_name: "User",
        foreign_key: :followee_id
end
