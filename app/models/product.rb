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
  belongs_to :owner, class_name: "User", foreign_key: :owner_id

  validates :owner_id, :title, :url, :description, presence: true
end
