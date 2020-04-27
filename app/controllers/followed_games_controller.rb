# frozen_string_literal: true

class FollowedGamesController < ApiController
  before_action :set_followed_game, only: %i[show update destroy]

  # GET /followed_games
  def index
    @followed_games = FollowedGames.all

    render json: @followed_games
  end

  # GET /followed_games/1
  def show
    render json: @followed_game
  end

  # POST /followed_games
  def create
    @followed_game = FollowedGames.new(followed_game_params)

    if @followed_game.save
      render json: @followed_game, status: :created, location: @followed_game
    else
      render json: @followed_game.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /followed_games/1
  def update
    if @followed_game.update(followed_game_params)
      render json: @followed_game
    else
      render json: @followed_game.errors, status: :unprocessable_entity
    end
  end

  # DELETE /followed_games/1
  def destroy
    @followed_game.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_followed_game
    @followed_game = FollowedGames.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def followed_game_params
    params.require(:followed_game).permit(:user, :game_id)
  end
end
