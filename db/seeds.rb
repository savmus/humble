# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: "demo", email: "demo@demo.com", password: "12345678")
User.create(username: "sav", email: "sav@hotmail.com", password: "87654321")
User.create(username: "11111", email: "11111@outlook.com", password: "password")
User.create(username: "abc123", email: "abc123@gmail.com", password: "123456789")
User.create(username: "catchthismail", email: "catchthismail@yahoo.com", password: "12345678")
User.create(username: "fabrika", email: "fabrika@inbox.com", password: "sunshine")
User.create(username: "job", email: "job@mail.com", password: "iloveyou")
User.create(username: "office", email: "office@outlook.com", password: "princess")
User.create(username: "uploader", email: "uploader@gmail.com", password: "football")
User.create(username: "baranov", email: "baranov@yahoo.com", password: "!@#$%^&*")

Post.create(author_id: 1, title: "My first post", description: "Hey guys!", post_status: "Posted", post_type: "text", publish_date: Time.new)
Post.create(author_id: 2, url: "http://cliparting.com/wp-content/uploads/2018/03/cool-pictures-2018-11.jpg", post_status: "Posted", post_type: "photo", publish_date: Time.new)
Post.create(author_id: 3, summary: "Get busy living or get busy dying.", caption: "Stephen King", post_status: "Posted", post_type: "quote", publish_date: Time.new)
Post.create(author_id: 4, url: "https://www.tumblr.com/", post_status: "Posted", post_type: "link", publish_date: Time.new)
Post.create(author_id: 5, title: "Game of Thrones", description: "Jon: What the hell do you know about being a bastard? Tyrion: All dwarves are bastards in their father's eyes.", post_status: "Posted", post_type: "chat", publish_date: Time.new)
Post.create(author_id: 6, url: "https://open.spotify.com/track/3GfOAdcoc3X5GPiiXmpBjK", post_status: "Posted", post_type: "audio", publish_date: Time.new)
Post.create(author_id: 7, url: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Vmb1tqYqyII" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', post_status: "Posted", post_type: "video", publish_date: Time.new)
Post.create(author_id: 8, title: "Wow", description: "I really like this site.", post_status: "Posted", post_type: "text", publish_date: Time.new)
Post.create(author_id: 9, summary: "Those who dare to fail miserably can achieve greatly.", caption: "John F. Kennedy", post_status: "Posted", post_type: "quote", publish_date: Time.new)
Post.create(author_id: 10, title: "Talking to Myself", description: "Me: Hi. Me: Hi, me!", post_status: "Posted", post_type: "chat", publish_date: Time.new)