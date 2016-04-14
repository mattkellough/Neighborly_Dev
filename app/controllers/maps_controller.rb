class MapsController < ApplicationController
  def landing
  end

  def index
    @jobs=params[:jobs]
    @zip=params[:zip]
    @map=Map.new.jobsearch(@jobs, @zip)
  end
end
