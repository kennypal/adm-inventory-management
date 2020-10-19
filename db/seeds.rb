# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# Medication.destroy_all
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

