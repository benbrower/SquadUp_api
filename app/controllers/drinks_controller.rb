# frozen_string_literal: true

class DrinksController < ApiController
  # GET /drinks
  def index
    @drinks = Drink.select('id, title').all
    render json: @drinks.to_json
  end

  # GET /drinks/:id
  def show
    @drink = Drink.find(params[:id])
    render json: @drink.to_json(include: { ingredients: { only: %i[id description] } })
  end
end
