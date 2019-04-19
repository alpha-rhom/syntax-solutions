class Comment < ApplicationRecord
    has_one :user, through: :library
end
