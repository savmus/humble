json.extract! user, :id, :username, :blog_title, :blog_description

if !user.avatar.nil?
    json.avatar asset_path(user.avatar)
end