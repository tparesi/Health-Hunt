# == Schema Information
#
# Table name: collectionings
#
#  id              :integer          not null, primary key
#  following_id    :integer          not null, foreign key
#  follower_id     :integer          not null, foreign key
#  created_at      :datetime
#  updated_at      :datetime

class Following < ActiveRecord::Base
  belongs_to :following, class_name: "User", foreign_key: :following_id
  belongs_to :follower, class_name: "User", foreign_key: :follower_id

  validates :following_id, :follower_id, presence: true
  validates :follower_id, uniqueness: { scope: :following_id }
end
