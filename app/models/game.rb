class Game < ApplicationRecord
    has_many :stats
    has_many :users, through: :stats
    has_many :followed_games
end
