class JobsController < ApplicationController
  def landing
  end

  def index
    @jobtitle=params[:jobs]
    @zip=params[:zip]
    @job=Job.new.jobsearch(@jobtitle, @zip)
    @arr=@job["resultItemList"]

    @arr.each do |i|
      @new=Job.create(company: i["company"])
    end

  end
end
