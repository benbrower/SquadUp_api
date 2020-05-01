# frozen_string_literal: true

class FollowedGameSerializer < ActiveModel::Serializer
  attributes :game
  belongs_to :game
  belongs_to :user
end
