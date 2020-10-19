class CreateMedications < ActiveRecord::Migration[6.0]
  def change
    create_table :medications do |t|
      t.string :description
      t.string :par_level
      t.string :quantity_on_hand
      t.references :device, null: false, foreign_key: true

      t.timestamps
    end
  end
end
