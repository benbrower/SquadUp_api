# frozen_string_literal: true

class Drink < ApplicationRecord
  has_many :ingredients
end
