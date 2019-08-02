json.extract! post, :id, :author_id, :title, :url, :caption, :summary, :description, :post_status, :post_type, :publish_date

if !post.image_url.nil?
    json.image_url asset_path(post.image_url)
end