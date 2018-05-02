
const Appointments = React.createClass({

  getInitialState() {
    return {
      appointments: this.props.appointments,
      title: '',
      appt_time: ''
    }
    this.addNewAppointment = this.addNewAppointment.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  },

  handleUserInput(obj) {
    this.setState(obj);
  },

  handleFormSubmit() {
    let appointment = {
      title: this.state.title,
      appointment_time: this.state.appt_time
    };
    this.setState({title: '', appt_time:''});
    $.post('/appointments',
     {appointment: appointment})
      .done(data => this.addNewAppointment(data));

  },

  addNewAppointment(appointment) {
    //first have to enable react add ons in the application.rb file in config.
    console.log(this.state.appointments)
    let appointments = React.addons.update(this.state.appointments, { $push: [appointment]});
    this.setState({
      appointments: appointments.sort(function(a,b){
      return new Date(a.appt_time) - new Date(b.appt_time);
      })
    });
  },

  render() {
    return(
      <div className='body'>
        <h1> React Appointments Calander </h1>
        <AppointmentForm
         input_title={this.state.title}
         input_appt_time={this.state.appt_time}
         onUserInput={this.handleUserInput}
         onFormSubmit={this.handleFormSubmit}
        />
        <AppointmentList appointments={this.state.appointments} />
      </div>
    )
  }
});
