# frozen_string_literal: true

class UsersController < ApiController
  before_action :set_user, only: %i[show update destroy]

  def friends
    @user = User.find(params[:id])
    render json: @user.friends.to_json(only: %i[id username email])
  end

  def friend_requests
    @user = User.find(params[:id])
    render json: @user.friend_requests.to_json(only: %i[id username email])
  end

  def pending_friends
    @user = User.find(params[:id])
    render json: @user.pending_friends.to_json(only: %i[id username email])
  end

  # GET /users
  def index
    @users = User.all

    render json: @users.to_json(only: %i[id username email pass])
  end

  # GET /users/1
  def show
    render json: @user
  end

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_user
    @user = User.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def user_params
    params.require(:user).permit(:username, :email, :password_digest, :pass)
  end
end
