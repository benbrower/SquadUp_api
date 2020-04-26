require 'test_helper'

class GamesFollowedsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @games_followed = games_followeds(:one)
  end

  test "should get index" do
    get games_followeds_url, as: :json
    assert_response :success
  end

  test "should create games_followed" do
    assert_difference('GamesFollowed.count') do
      post games_followeds_url, params: { games_followed: { game_id: @games_followed.game_id, user: @games_followed.user } }, as: :json
    end

    assert_response 201
  end

  test "should show games_followed" do
    get games_followed_url(@games_followed), as: :json
    assert_response :success
  end

  test "should update games_followed" do
    patch games_followed_url(@games_followed), params: { games_followed: { game_id: @games_followed.game_id, user: @games_followed.user } }, as: :json
    assert_response 200
  end

  test "should destroy games_followed" do
    assert_difference('GamesFollowed.count', -1) do
      delete games_followed_url(@games_followed), as: :json
    end

    assert_response 204
  end
end
