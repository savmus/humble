json.array! @posts do |post|
  json.partial! 'api/posts/post', post: post

  json.user do
    json.partial! 'api/users/user', user: post.author

    json.follows do
      json.array! post.author.followships do |follow|
        json.extract! follow, :followee_id
      end
    end
  end
end