class GameSerializer < ActiveModel::Serializer
  attributes :title, :api_url
  has_many :stats
  has_many :users, through: :stats
  has_many :followed_games
end
