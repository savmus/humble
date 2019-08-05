# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: "demo", email: "demo@demo.com", password: "12345678", avatar: "https://avatarfiles.alphacoders.com/865/86518.png", blog_title: "Untitled", blog_description: "Demo blogger")
User.create(username: "sav", email: "sav@hotmail.com", password: "87654321", avatar: "https://66.media.tumblr.com/2060fe62b7ed3b46e5789356942a305e/tumblr_o51oavbMDx1ugpbmuo2_250.png", blog_title: "Dogs", blog_description: "Posting pictures of dogs.")
User.create(username: "11111", email: "11111@outlook.com", password: "password", avatar: "https://tse1.mm.bing.net/th?id=OIP.bKppp1QpbQZjNtkoHpg4fgHaHa&w=190&h=190&c=8&o=5&pid=1.7", blog_title: "Untitled", blog_description: "")
User.create(username: "abc123", email: "abc123@gmail.com", password: "123456789", avatar: "https://66.media.tumblr.com/2060fe62b7ed3b46e5789356942a305e/tumblr_o51oavbMDx1ugpbmuo2_250.png", blog_title: "Cats", blog_description: "Posting pics of cats.")
User.create(username: "catchthismail", email: "catchthismail@yahoo.com", password: "12345678", avatar: "https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/999/UP2538-CUSA05620_00-AV00000000000166/1562801065000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000", blog_title: "Untitled", blog_description: "My blog.")
User.create(username: "fabrika", email: "fabrika@inbox.com", password: "sunshine", avatar: "https://66.media.tumblr.com/2060fe62b7ed3b46e5789356942a305e/tumblr_o51oavbMDx1ugpbmuo2_250.png", blog_title: "The Best Blog", blog_description: "Only the best!")
User.create(username: "job", email: "job@mail.com", password: "iloveyou", avatar: "http://hatintime.com/public/images/avatars/gallery-images/snatcher2.png", blog_title: "Untitled", blog_description: "Just expressing myself.")
User.create(username: "office", email: "office@outlook.com", password: "princess", avatar: "https://66.media.tumblr.com/2060fe62b7ed3b46e5789356942a305e/tumblr_o51oavbMDx1ugpbmuo2_250.png", blog_title: "Food", blog_description: "Food pics.")
User.create(username: "uploader", email: "uploader@gmail.com", password: "football", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3mwQwhbvshkibife6ggHHOBXILUL1qAD2hHUFuHhoR9Zj6hTx9A", blog_title: "Untitled", blog_description: "")
User.create(username: "baranov", email: "baranov@yahoo.com", password: "!@#$%^&*", avatar: "https://66.media.tumblr.com/2060fe62b7ed3b46e5789356942a305e/tumblr_o51oavbMDx1ugpbmuo2_250.png", blog_title: "My Blog", blog_description: "")

Post.create(author_id: 1, title: "My first post", description: "Hey guys!", post_status: "Posted", post_type: "text", publish_date: Time.new)
Post.create(author_id: 2, image_url: "http://cliparting.com/wp-content/uploads/2018/03/cool-pictures-2018-11.jpg", caption: "Cool photo", post_status: "Posted", post_type: "photo", publish_date: Time.new)
Post.create(author_id: 3, caption: "Get busy living or get busy dying.", summary: "Stephen King", post_status: "Posted", post_type: "quote", publish_date: Time.new)
Post.create(author_id: 4, url: "https://www.tumblr.com/", description: "This site looks familiar...", post_status: "Posted", post_type: "link", publish_date: Time.new)
Post.create(author_id: 5, title: "Wow", description: "I really like this site.", post_status: "Posted", post_type: "text", publish_date: Time.new)
Post.create(author_id: 6, caption: "Those who dare to fail miserably can achieve greatly.", summary: "John F. Kennedy", post_status: "Posted", post_type: "quote", publish_date: Time.new)
Post.create(author_id: 7, image_url: "http://wallpapercave.com/wp/NZpP73A.jpg", caption: "I really like this photo!", post_status: "Posted", post_type: "photo", publish_date: Time.new)
Post.create(author_id: 8, url: "http://www.neopets.com/", description: "Neopets!!", post_status: "Posted", post_type: "link", publish_date: Time.new)
Post.create(author_id: 9, url: "https://www.youtube.com/", description: "Visit Youtube.", post_status: "Posted", post_type: "link", publish_date: Time.new)
Post.create(author_id: 10, caption: "You will face many defeats in life, but never let yourself be defeated.", summary: "Maya Angelou", post_status: "Posted", post_type: "quote", publish_date: Time.new)