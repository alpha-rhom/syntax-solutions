class Library < ApplicationRecord
    belongs_to :user
    has_many :comments
    has_many :user_likes
end

