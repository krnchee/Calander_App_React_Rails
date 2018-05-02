
const Appointment = React.createClass({
  render() {
    return(
      <div className='appointment'>
        <h3>{this.props.appointment.title}</h3>
        <p>{moment(this.props.appointment.appointment_time).format('MMMM DD YYYY, h:mm:ss a')}</p>
      </div>
  )
}
});
