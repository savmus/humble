# == Schema Information
#
# Table name: users
#
#  id               :bigint           not null, primary key
#  username         :string           not null
#  email            :string           not null
#  session_token    :string           not null
#  password_digest  :string           not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  avatar           :string
#  blog_title       :string
#  blog_description :string
#

class User < ApplicationRecord
    attr_reader :password

    validates :username, :session_token, :email, presence: true, uniqueness: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :password_digest, presence: true
    validates :password, length: { minimum: 8, allow_nil: true }

    after_initialize :ensure_session_token

    has_many :posts,
      class_name: "Post",
      foreign_key: :author_id

    has_many :followships,
      class_name: "Follow",
      foreign_key: :user_id

    has_many :fanships,
      class_name: "Follow",
      foreign_key: :followee_id

    has_many :likes,
      class_name: "Like",
      foreign_key: :user_id

    has_many :followers,
      through: :fanships,
      source: :follower

    has_many :follows,
      through: :followships,
      source: :followee

    has_many :liked_posts,
      through: :likes,
      source: :liked_post

    def self.find_by_credentials(email, password)
      user = User.find_by(email: email)
      return nil unless user
      user.is_password?(password) ? user : nil
    end

    def password=(password)
      @password = password
      self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
      BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token
      self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_session_token!
      self.session_token = SecureRandom.urlsafe_base64
      self.save
      self.session_token
    end
end
