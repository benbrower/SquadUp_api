class CreateGamesFolloweds < ActiveRecord::Migration[6.0]
  def change
    create_table :games_followeds do |t|
      t.references :user
      t.references :game, null: false, foreign_key: true

      t.timestamps
    end
  end
end
