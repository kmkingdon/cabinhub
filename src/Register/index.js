import React, { Component } from 'react';
import Calendar from '../Calendar';
import FormNew from './form';
import FormEdit from './formedit';
import Navigation from '../Navigation';


class Register extends Component {
  constructor(props) {
    super(props)
    this.state={
      formView:'register',
      selectedEvent:{}
    }
    this.eventSelect = this.eventSelect.bind(this);
    this.back = this.back.bind(this);
  }

  eventSelect(e) {
  
    if(e.users_id=== this.props.userId) {
      this.setState({selectedEvent:e});
      this.setState({formView:'edit'});
    }
  }

  back(){
    this.setState({formView:'register'})
  }


  render() {
    return (
      <div id="register">
        <Navigation userName={this.props.userName}/>
        <div id="register-scroll">
          <div id="register-list">
            <FormNew formView={this.state.formView} confirmForm={this.props.confirmForm} handleSubmitNew={this.props.handleSubmitNew}/>
            <FormEdit handleDelete={this.props.handleDelete} handleSubmitEdit={this.props.handleSubmitEdit} back={this.back} selectedEvent={this.state.selectedEvent} formView={this.state.formView} />
            <Calendar userId={this.props.userId} eventSelect={this.eventSelect} events={this.props.events} />
          </div>
        </div>
      </div>
    )
  }
}

export default Register;
