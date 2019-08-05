json.array! @users do |user|
  json.partial! 'api/users/user', user: user

  json.follows do
    json.array! user.follows do |follow|
      json.extract! follow, :followee_id
    end
  end

  json.followers do
    json.array! user.followers do |follower|
      json.extract! follower, :user_id
    end
  end
end