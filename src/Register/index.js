import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Calendar from '../Calendar';
import FormNew from './form';
import FormEdit from './formedit'


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
    this.setState({selectedEvent:e});
    this.setState({formView:'edit'})
  }

  back(){
    this.setState({formView:'register'})
  }


  render() {
    return (
      <div id="register">
        <FormNew formView={this.state.formView} confirmForm={this.props.confirmForm} handleSubmitNew={this.props.handleSubmitNew}/>
        <FormEdit handleDelete={this.props.handleDelete} handleSubmitEdit={this.props.handleSubmitEdit} back={this.back} selectedEvent={this.state.selectedEvent} formView={this.state.formView} />
        <Calendar eventSelect={this.eventSelect} events={this.props.events} />
      </div>
    )
  }
}

export default Register;
