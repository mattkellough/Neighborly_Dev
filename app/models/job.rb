class Job < ActiveRecord::Base

  def jobsearch(jobs, zip)
    HTTParty.get("http://service.dice.com/api/rest/jobsearch/v1/simple.json?text=#{jobs}&city=#{zip}")
  end

  reverse_geocoded_by :latitude, :longitude,
  :address => :location
  after_validation :reverse_geocode
end
