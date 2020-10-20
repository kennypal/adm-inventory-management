# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Medication.destroy_all
Device.destroy_all
Hospital.destroy_all

@hospital = Hospital.create(name: 'NYU Winthrop Hospital')
puts "#{Hospital.count} hospitals created"

@gardner = Device.create(name: 'Gardner', hospital: @hospital)
@hoag = Device.create(name: 'Hoag', hospital: @hospital)
@main = Device.create(name: 'Main', hospital: @hospital)
@north = Device.create(name: 'North', hospital: @hospital)
@potter = Device.create(name: 'Potter', hospital: @hospital)
puts "#{Device.count} devices created"

@acetaminophen = Medication.create!(description: 'Acetaminophen 325mg Tab', par_level: '200', quantity_on_hand: '100', devices: [@gardner, @hoag, @main, @north, @potter])
@albuterol = Medication.create(description: 'Albuterol 2.5mg/3ml Inh Soln', par_level: '30', quantity_on_hand: '20', devices: [@hoag])
@polyethylene = Medication.create(description: 'Polyethylene Glycol 3350 Powder Pkt', par_level: '30', quantity_on_hand: '15', devices: [@hoag, @main, @north])
@ondansetron = Medication.create(description: 'Ondansetron 2mg/ml Inj', par_level: '10', quantity_on_hand: '10', devices: [@gardner, @hoag, @north, @potter])
@heparin = Medication.create(description: 'Heparin 5mg/ml Inj', par_level: '50', quantity_on_hand: '25', devices: [@hoag, @main, @north, @potter])
@oxycodone = Medication.create(description: 'Oxycodone 5mg Tab', par_level: '50', quantity_on_hand: '50', devices: [@hoag, @north, @potter])
@morphine = Medication.create(description: 'Morphine 2mg/ml Syr', par_level: '30', quantity_on_hand: '20', devices: [@hoag, @north, @potter])
@hydromorphone = Medication.create(description: 'Hydromorphone 2mg/ml Inj', par_level: '10', quantity_on_hand: '10', devices: [@north, @potter])
@enoxaparin = Medication.create(description: 'Enoxaparin 40mg/0.4ml Syr', par_level: '50', quantity_on_hand: '25', devices: [@gardner, @hoag, @main, @north, @potter])
@fentanyl = Medication.create(description: 'Fentanyl 100mcg/2ml Inj', par_level: '25', quantity_on_hand: '20', devices: [@hoag, @north, @potter])
puts "#{Medication.count} medications created"

