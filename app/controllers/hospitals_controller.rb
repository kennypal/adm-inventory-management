class HospitalsController < ApplicationController
  before_action :set_hospital, only: [:show]

  # GET /hospitals
  def index
    @hospitals = Hospital.all

    render json: @hospitals
  end

  # GET /hospitals/1
  def show
    render json: @hospital
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_hospital
      @hospital = Hospital.find(params[:id])
    end
end
