# frozen_string_literal: true

class FriendshipSerializer < ActiveModel::Serializer
  attributes :id, :user, :friend, :confirmed
  belongs_to :user
  belongs_to :friend, class_name: 'User'
end
