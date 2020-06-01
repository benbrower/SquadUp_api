# frozen_string_literal: true

class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :pass, :password_digest, :friends
  has_many :stats
  has_many :accounts
  has_many :followed_games
  has_many :friendships
  has_many :inverse_friendships, class_name: 'Friendship', foreign_key: 'friend_id'
end
