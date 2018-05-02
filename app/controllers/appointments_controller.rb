class AppointmentsController < ApplicationController
  def index
     @appointments = Appointment.order('appointment_time ASC')
     @appointment = Appointment.new
  end

  def create
    @appointment = Appointment.new(appointment_params)
    if @appointment.save
      render json: @appointment
    else
      render json: @appointment.errors
    end
  end

  private

  def appointment_params
    params.require(:appointment).permit(:title, :appointment_time)
  end
end