# == Schema Information
#
# Table name: votes
#
#  id              :integer          not null, primary key
#  user_id         :integer          not null, foreign key
#  product_id      :integer          not null, foreign key
#  created_at      :datetime
#  updated_at      :datetime

class Vote < ActiveRecord::Base
  belongs_to :user
  belongs_to :product

  validates :user_id, :product_id, presence: true
  validates :user_id, uniqueness: { scope: :product_id }
end
