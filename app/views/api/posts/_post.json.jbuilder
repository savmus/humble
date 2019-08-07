json.extract! post, :id, :author_id, :title, :url, :caption, :summary, :description, :post_status, :post_type, :publish_date

if !post.image_url.nil?
    json.image_url asset_path(post.image_url)
end

json.likes post.likes.count
json.liked_by_current_user !!post.likes.find_by(user_id: current_user.id)