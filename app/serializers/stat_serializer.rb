# frozen_string_literal: true

class StatSerializer < ActiveModel::Serializer
  attributes :game, :account
  belongs_to :user
  belongs_to :game
  belongs_to :account
end
