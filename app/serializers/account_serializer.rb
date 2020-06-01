# frozen_string_literal: true

class AccountSerializer < ActiveModel::Serializer
  attributes :name, :platform
  belongs_to :user
end
