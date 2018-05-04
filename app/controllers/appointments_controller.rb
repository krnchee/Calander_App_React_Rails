class AppointmentsController < ApplicationController
  before_action :authenticate_user!
  def index
     @appointments = current_user.appointments.order('appointment_time ASC')
     @appointment = current_user.appointments.new
  end

  def create
    @appointment = current_user.appointments.new(appointment_params)
    if @current_user.appointments.save
      render json: @appointment
    else
      render json: @current_user.appointments.errors
    end
  end

  private

  def appointment_params
    params.require(:appointment).permit(:title, :appointment_time)
  end
end
