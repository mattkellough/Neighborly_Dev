class JobsController < ApplicationController
  def landing
  end

  def index
    if Job.nil?
    else
      Job.destroy_all
    end
      @jobtitle=params[:jobs]
      # @city=params[:city]
      # @state=params[:state]
      @zip=params[:zip]
      @job=Job.new.jobsearch(@jobtitle, @zip)
      @arr=@job["resultItemList"]

      @arr.each do |i|
        @new=Job.create(company: i["company"], title: i["jobTitle"], url: i["detailUrl"])
      end


  end

end
