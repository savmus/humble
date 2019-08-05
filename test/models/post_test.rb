# == Schema Information
#
# Table name: posts
#
#  id           :bigint           not null, primary key
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
#  image_url    :string
#

require 'test_helper'

class PostTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
