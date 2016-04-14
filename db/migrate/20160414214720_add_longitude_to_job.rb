class AddLongitudeToJob < ActiveRecord::Migration
  def change
    add_column :jobs, :longitude, :string
  end
end
