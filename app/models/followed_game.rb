# frozen_string_literal: true

class FollowedGame < ApplicationRecord
  belongs_to :game
  belongs_to :user
end
