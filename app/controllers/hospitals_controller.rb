class HospitalsController < ApplicationController
  before_action :set_device, only: [:show]

  # GET /hospitals
  def index
    @hospitals = Hospital.all

    render json: @hospitals
  end

  # GET /hospitals/1
  def show
    render json: @device
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_device
      @device = Device.find(params[:id])
    end
end
