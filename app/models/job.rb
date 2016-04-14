class Job < ActiveRecord::Base

  def jobsearch(jobs, zip)
    HTTParty.get("http://service.dice.com/api/rest/jobsearch/v1/simple.json?text=#{jobs}&city=#{zip}")
  end

  geocoded_by :company
  after_validation :geocode

end
