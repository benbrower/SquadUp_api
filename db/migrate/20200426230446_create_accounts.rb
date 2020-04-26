class CreateAccounts < ActiveRecord::Migration[6.0]
  def change
    create_table :accounts do |t|
      t.references :user
      t.string :name
      t.string :platform

      t.timestamps
    end
  end
end
