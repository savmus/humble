@users.each do |user|
  json.set! user.id do
    json.partial! 'api/users/user', user: user
  end

  json.posts do
    json.array! user.posts do |post|
      json.partial! 'api/posts/post', post: post
    end
  end
end