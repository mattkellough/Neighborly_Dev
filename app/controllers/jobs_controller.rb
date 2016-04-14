class JobsController < ApplicationController
  def landing
  end

  def index
    @jobtitle=params[:jobs]
    @zip=params[:zip]
    @job=Job.new.jobsearch(@jobtitle, @zip)
  end
end
