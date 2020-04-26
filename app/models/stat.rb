class Stat < ApplicationRecord
  belongs_to :user
  belongs_to :game
  belongs_to :account
end
