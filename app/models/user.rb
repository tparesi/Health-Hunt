# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string(255)      not null
#  password_digest :string(255)      not null
#  session_token   :string(255)      not null
#  created_at      :datetime
#  updated_at      :datetime


class User < ActiveRecord::Base
  attr_reader :password

  has_many :products, foreign_key: :owner_id
  has_many :comments, foreign_key: :author_id
  has_many :collections, foreign_key: :owner_id
  has_many :votes

  validates :email, :session_token, presence: true
  validates :email, :session_token, uniqueness: true
  validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i, :on => :create
  validates :password, length: { in: 6..12 }, allow_nil: true

  after_initialize :ensure_session_token

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def reset_session_token!
   self.session_token = User.generate_session_token
   self.save!
   self.session_token
 end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  private

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

end
