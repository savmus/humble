json.array! @posts do |post|
  json.partial! 'api/posts/post', post: post

  json.user do
    json.partial! 'api/users/user', user: post.author
  end
end