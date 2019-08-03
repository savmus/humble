# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: "demo", email: "demo@demo.com", password: "12345678", avatar: "https://avatarfiles.alphacoders.com/865/86518.png")
User.create(username: "sav", email: "sav@hotmail.com", password: "87654321")
User.create(username: "11111", email: "11111@outlook.com", password: "password", avatar: "https://tse1.mm.bing.net/th?id=OIP.bKppp1QpbQZjNtkoHpg4fgHaHa&w=190&h=190&c=8&o=5&pid=1.7")
User.create(username: "abc123", email: "abc123@gmail.com", password: "123456789")
User.create(username: "catchthismail", email: "catchthismail@yahoo.com", password: "12345678", avatar: "https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/999/UP2538-CUSA05620_00-AV00000000000166/1562801065000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000")
User.create(username: "fabrika", email: "fabrika@inbox.com", password: "sunshine")
User.create(username: "job", email: "job@mail.com", password: "iloveyou", avatar: "http://hatintime.com/public/images/avatars/gallery-images/snatcher2.png")
User.create(username: "office", email: "office@outlook.com", password: "princess")
User.create(username: "uploader", email: "uploader@gmail.com", password: "football", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3mwQwhbvshkibife6ggHHOBXILUL1qAD2hHUFuHhoR9Zj6hTx9A")
User.create(username: "baranov", email: "baranov@yahoo.com", password: "!@#$%^&*")

Post.create(author_id: 1, title: "My first post", description: "Hey guys!", post_status: "Posted", post_type: "text", publish_date: Time.new)
Post.create(author_id: 2, image_url: "http://cliparting.com/wp-content/uploads/2018/03/cool-pictures-2018-11.jpg", post_status: "Posted", post_type: "photo", publish_date: Time.new)
Post.create(author_id: 3, summary: "Get busy living or get busy dying.", caption: "Stephen King", post_status: "Posted", post_type: "quote", publish_date: Time.new)
Post.create(author_id: 4, url: "https://www.tumblr.com/", post_status: "Posted", post_type: "link", publish_date: Time.new)
Post.create(author_id: 5, title: "Wow", description: "I really like this site.", post_status: "Posted", post_type: "text", publish_date: Time.new)
Post.create(author_id: 6, summary: "Those who dare to fail miserably can achieve greatly.", caption: "John F. Kennedy", post_status: "Posted", post_type: "quote", publish_date: Time.new)
Post.create(author_id: 7, image_url: "http://wallpapercave.com/wp/NZpP73A.jpg", post_status: "Posted", post_type: "photo", publish_date: Time.new)
Post.create(author_id: 8, url: "http://www.neopets.com/", post_status: "Posted", post_type: "link", publish_date: Time.new)
Post.create(author_id: 9, url: "https://www.youtube.com/", post_status: "Posted", post_type: "link", publish_date: Time.new)
Post.create(author_id: 10, summary: "You will face many defeats in life, but never let yourself be defeated.", caption: "Maya Angelou", post_status: "Posted", post_type: "quote", publish_date: Time.new)