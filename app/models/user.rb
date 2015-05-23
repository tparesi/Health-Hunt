# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string(255)      not null
#  password_digest :string(255)      not null
#  created_at      :datetime
#  updated_at      :datetime
#  provider        :string(255)
#  uid             :string(255)

class User < ActiveRecord::Base
  attr_reader :password

  has_many :sessions, dependent: :destroy

  has_many :products, foreign_key: :owner_id
  has_many :comments, foreign_key: :author_id
  has_many :collections, foreign_key: :owner_id
  has_many :votes
  has_many :upvoted_products, through: :votes, source: :product

  has_many :in_follows, class_name: "Following", foreign_key: :following_id
  has_many :followers, through: :in_follows, source: :follower

  has_many :out_follows, class_name: "Following", foreign_key: :follower_id
  has_many :followings, through: :out_follows, source: :following

  validates :email, presence: true
  validates :email, uniqueness: true
  # validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i, :on => :create
  validates :password, length: { minimum: 6 }, allow_nil: true

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def self.find_or_create_by_auth_hash(auth_hash)
    user = User.find_by(
            provider: auth_hash[:provider],
            uid: auth_hash[:uid])

    unless user
      user = User.create!(
            provider: auth_hash[:provider],
            uid: auth_hash[:uid],
            email: auth_hash[:info][:nickname], #bad solution
            password: SecureRandom::urlsafe_base64)
    end

    user
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

end
