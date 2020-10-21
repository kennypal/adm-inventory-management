class HospitalsController < ApplicationController

  # GET /hospitals
  def index
    @hospitals = Hospital.all

    render json: @hospitals
  end
end
