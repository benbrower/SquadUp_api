class Game < ApplicationRecord
    has_many :stats
    has_many :users, through: :stats
    has_many :games_followeds
end
