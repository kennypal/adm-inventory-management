class Device < ApplicationRecord
  belongs_to :hospital

  has_many :medications
end
