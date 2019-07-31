json.extract! @blog, :id, :user_id, :title, :handle

json.posts do
  json.array! @posts do |post|
    json.extract! post, :id, :post_type
  end
end