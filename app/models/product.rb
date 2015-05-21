# == Schema Information
#
# Table name: products
#
#  id              :integer          not null, primary key
#  owner_id        :integer          not null, foreign key
#  title           :string(255)      not null
#  url             :string(255)      not null
#  description     :string(255)      not null
#  created_at      :datetime
#  updated_at      :datetime

class Product < ActiveRecord::Base
  include PgSearch
  pg_search_scope :search_by_product,
                  :against => [:title, :description],
                  :using => {
                    :tsearch => {:prefix => true}
                  }


  belongs_to :owner, class_name: "User", foreign_key: :owner_id
  has_many :comments
  has_many :collectionings
  has_many :collections, through: :collectionings
  has_many :votes
  has_many :voters, through: :votes, source: :user

  validates :owner_id, :title, :url, :description, presence: true
  before_save :smart_add_url_protocol

  def vote_count
    self.votes.to_a.count
  end

  protected

  def smart_add_url_protocol
    unless self.url[/\Ahttp:\/\//] || self.url[/\Ahttps:\/\//]
      self.url = "http://#{self.url}"
    end
  end
end
