class AddPassToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :pass, :string
  end
end
