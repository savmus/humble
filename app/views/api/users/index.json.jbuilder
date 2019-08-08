@users.each do |user|
  json.set! user.id do
    json.partial! 'api/users/user', user: user

    json.follows do
      json.array! user.followships do |follow|
        json.extract! follow, :followee_id
      end
    end
  end
end