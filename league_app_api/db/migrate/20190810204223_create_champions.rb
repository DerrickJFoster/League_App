class CreateChampions < ActiveRecord::Migration[6.0]
  def change
    create_table :champions do |t|
      t.string :name
      t.string :leagueId
      t.integer :key

      t.timestamps
    end
  end
end
