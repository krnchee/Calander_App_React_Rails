
const AppointmentForm = React.createClass({

  handleChange(event) {
    let obj = {};
    obj[event.target.name] = event.target.value;
    this.props.onUserInput(obj);
  },

  handleSubmit(event) {
    event.preventDefault();
    this.props.onFormSubmit();
  },

  setApptTime(event) {
    let name = 'appt_time';
    let obj = {};
    if (obj[name] =event.toDate()) {
      this.props.onUserInput(obj);
    }
  },

  render() {
    let inputProps = {
      name: 'appt_time'
    };
    return(
      <div className='form'>
        <h3> Create an Appointment </h3>
        <form onSubmit={this.handleSubmit}>
          <input name='title' placeholder= 'Appointment Title'
           value={this.props.input_title}
           onChange={this.handleChange}
          />

          <Datetime input={false} open={true} inputProps={inputProps}
           value={this.props.input_appt_time}
           onChange={this.setApptTime}
           />
          <input type='submit' className='submit-button' value='Make an Appointment' />
        </form>
      </div>
    )
  }
})
