json.partial! 'api/users/user', user: @user

json.posts do
  json.array! @posts do |post|
    json.partial! 'api/posts/post', post: post
  end
end

json.follows do
  json.array! @follows do |follow|
    json.extract! follow, :followee_id
  end
end

json.followers do
  json.array! @followers do |follower|
    json.extract! follower, :user_id
  end
end