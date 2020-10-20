class CreateJoinTableDevicesMedications < ActiveRecord::Migration[6.0]
  def change
    create_join_table :devices, :medications do |t|
      # t.index [:device_id, :medication_id]
      # t.index [:medication_id, :device_id]
    end
  end
end
