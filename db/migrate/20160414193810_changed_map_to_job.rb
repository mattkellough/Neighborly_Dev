class ChangedMapToJob < ActiveRecord::Migration
  def change
     rename_table(:maps, :jobs)
  end
end
