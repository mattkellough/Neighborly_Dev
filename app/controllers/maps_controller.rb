class MapsController < ApplicationController
  def landing
  end

  def index
    @jobs=params[:jobs]
    @state=params[:state]
    @city=params[:city]
    @map=Map.new.jobsearch(@jobs, @city,@state)
  end
end
