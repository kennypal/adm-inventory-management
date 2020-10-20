class RemoveDeviceIdFromMedications < ActiveRecord::Migration[6.0]
  def change
    remove_column :medications, :device_id, :bigint
  end
end
