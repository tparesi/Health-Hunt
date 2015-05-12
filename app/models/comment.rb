# == Schema Information
#
# Table name: comments
#
#  id              :integer          not null, primary key
#  author_id       :integer          not null, foreign key
#  product_id      :integer          not null, foreign key
#  body            :text             not null
#  created_at      :datetime
#  updated_at      :datetime

class Comment < ActiveRecord::Base
  belongs_to
    :author,
    class_name: "User",
    foreign_key: :author_id

  belongs_to :product

  validates :author_id, :product_id, :body, presence: true
end
