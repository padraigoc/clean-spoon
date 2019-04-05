class Allergy < ApplicationRecord
 
  has_many :user_allergies

  validates :name, presence: true
  validates :is_ingredient, presence: true
end
