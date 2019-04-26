class UserLike < ApplicationRecord
    has_one :user, through: :library
end
