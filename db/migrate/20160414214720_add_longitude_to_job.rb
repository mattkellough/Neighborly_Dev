class AddLongitudeToJob < ActiveRecord::Migration
  def change
    add_column :jobs, :longitude, :float
  end
end
