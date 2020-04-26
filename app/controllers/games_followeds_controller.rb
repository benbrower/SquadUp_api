class GamesFollowedsController < ApplicationController
  before_action :set_games_followed, only: [:show, :update, :destroy]

  # GET /games_followeds
  def index
    @games_followeds = GamesFollowed.all

    render json: @games_followeds
  end

  # GET /games_followeds/1
  def show
    render json: @games_followed
  end

  # POST /games_followeds
  def create
    @games_followed = GamesFollowed.new(games_followed_params)

    if @games_followed.save
      render json: @games_followed, status: :created, location: @games_followed
    else
      render json: @games_followed.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /games_followeds/1
  def update
    if @games_followed.update(games_followed_params)
      render json: @games_followed
    else
      render json: @games_followed.errors, status: :unprocessable_entity
    end
  end

  # DELETE /games_followeds/1
  def destroy
    @games_followed.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_games_followed
      @games_followed = GamesFollowed.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def games_followed_params
      params.require(:games_followed).permit(:user, :game_id)
    end
end
