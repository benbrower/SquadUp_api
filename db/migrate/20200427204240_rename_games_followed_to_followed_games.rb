class RenameGamesFollowedToFollowedGames < ActiveRecord::Migration[6.0]
  def change
    rename_table :games_followeds, :followed_games
  end
end
