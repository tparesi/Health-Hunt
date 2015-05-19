# == Schema Information
#
# Table name: collections
#
#  id              :integer          not null, primary key
#  owner_id        :integer          not null, foreign key
#  title           :string(255)      not null
#  image           :string(255)      not null
#  description     :string(255)      not null
#  created_at      :datetime
#  updated_at      :datetime

class Collection < ActiveRecord::Base
  belongs_to :owner, class_name: "User", foreign_key: :owner_id
  has_many :collectionings
  has_many :products, through: :collectionings

  has_attached_file :image, :styles => { :medium => "300x300>", :thumb => "100x100>" }, :default_url => ":style/missing.png"
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/

  validates :owner_id, :title, presence: true
end
