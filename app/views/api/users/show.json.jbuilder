json.partial! 'api/users/user', user: @user

json.posts do
  json.array! @posts do |post|
    json.partial! 'api/posts/post', post: post
  end
end