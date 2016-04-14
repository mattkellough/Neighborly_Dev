class AddLatitudeToJob < ActiveRecord::Migration
  def change
    add_column :jobs, :latitude, :float
  end
end
