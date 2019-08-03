json.extract! user, :id, :username

if !user.avatar.nil?
    json.avatar asset_path(user.avatar)
end