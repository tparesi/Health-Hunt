# == Schema Information
#
# Table name: collectionings
#
#  id              :integer          not null, primary key
#  collection_id   :integer          not null, foreign key
#  product_id      :integer          not null, foreign key
#  created_at      :datetime
#  updated_at      :datetime

class Collectioning < ActiveRecord::Base
  belongs_to :collection
  belongs_to :product

  validates :collection_id, :product_id, presence: true
end
