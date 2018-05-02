
const AppointmentList = React.createClass({
  render() {
    return(
      <div>
        {this.props.appointments.map((appointment) => {
          return(
            <Appointment appointment={appointment} key={appointment.id}/>
          )
        })}
      </div>
  )}
});
