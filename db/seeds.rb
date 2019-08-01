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

Post.create(author_id: 1, post_status: "Posted", post_type: "Text")
Post.create(author_id: 2, post_status: "Posted", post_type: "Quote")