class MedicationsController < ApplicationController
  before_action :set_medication, only: [:show, :update, :destroy]

  # GET /medications
  def index
    @device = Device.find(params[:device_id])
    # @medications = Medication.all

    render json: @device.medications
  end

  # GET /medications/1
  def show
    render json: @medication
  end

  # POST /medications
  def create
    @medication = Medication.new(medication_params)
    @medication.save
    @device = Device.find(params[:device_id])
    @medication.devices << @device

      render json: @medication, status: :created
    # else
    #   render json: @medication.errors, status: :unprocessable_entity
    
  end

  # PATCH/PUT /medications/1
  def update
    if @medication.update(medication_params)
      render json: @medication
    else
      render json: @medication.errors, status: :unprocessable_entity
    end
  end

  # DELETE /medications/1
  def destroy
    @medication.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_medication
      @medication = Medication.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def medication_params
      params.require(:medication).permit(:description, :par_level, :quantity_on_hand, :device_id)
    end
end
