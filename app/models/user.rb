# frozen_string_literal: true

class User < ApplicationRecord
  has_many :stats
  has_many :accounts
  has_many :followed_games
  has_many :friendships
  has_many :inverse_friendships, class_name: 'Friendship', foreign_key: 'friend_id'
  has_secure_password
  validates :username, uniqueness: { case_sensitive: false }
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }

  # get friends from friendships
  def friends
    friends = friendships.map do |friendship|
      friendship.friend if friendship.confirmed
    end
    friends += inverse_friendships.map do |friendship|
      friendship.user if friendship.confirmed
    end
    friends.compact
  end

  # check if user is friends with another user
  def friend?(user)
    friends.include?(user)
  end

  # get users that have been sent pending(outgoing) friend requests
  def pending_friends
    friendships.map do |friendship|
      friendship.friend unless friendship.confirmed
    end .compact
  end

  # get users who have sent friend requests(unnaccepted) to user
  def friend_requests
    inverse_friendships.map do |friendship|
      friendship.user unless friendship.confirmed
    end .compact
  end

  # accept friend request
  def confirm_friend(user)
    friendship = inverse_friendships.find { |friendship| friendship.user == user }
    friendship.confirmed = true
    friendship.save
  end
end
