json.extract! user, :id, :username, :blog_title, :blog_description

if !user.avatar.nil?
    json.avatar asset_path(user.avatar)
end

json.follow_count user.follows.count
json.followed_by_current_user !!user.fanships.find_by(user_id: current_user.id)