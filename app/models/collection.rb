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

  validates :owner_id, :title, :description, presence: true
end
