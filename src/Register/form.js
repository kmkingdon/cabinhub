import React from 'react';
import styled from 'styled-components';


const FormNew = (props) => {

  return (
    <div id="form" className={(props.formView === 'register') ? '' : 'hidden' }>
      <Container>
        <Title>Register Your Visit</Title>
        <Form onSubmit={(e)=>{props.handleSubmitNew(e)}}>
          <Label>Who is going to the Cabin?</Label>
          <Input required type="text" name="title" placeholder="Your Names or Group Name"/>
          <Label>When does your stay start?</Label>
          <Input required  type="date" name="start" />
          <Label>When does your stay end?</Label>
          <Input required type="date" name="end" />
          <Submit type="submit" name="submit"/>
        </Form>
        <Confirm className={props.confirmForm ? '' : 'hidden'}>Thank you for registering your visit! </Confirm>
      </Container>
    </div>
  )
}

export default FormNew;

const Container =styled.div `
  width: 90%;
  height: 90%;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
`
const Title = styled.h1 `
  margin-top: 1rem;
  color: teal;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  @media only screen and (max-width: 500px) {
    margin-bottom: 1rem;
  }
`
const Form = styled.form `
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 90%;
`
const Label = styled.label `
  text-align: left;
  font-size: 1rem;
  margin-top: 1rem;
  width: 100%;
`
const Input = styled.input `
  font-size: 1rem;
  margin-top: 1rem;
  width: 100%;
  height: 2rem;
  border: solid black 1px;
  @media only screen and (max-width: 500px) {
    margin-top: 0rem;
  }
`

const Submit = styled.input `
  font-size: 1rem;
  background-color: teal;
  color: white;
  margin-top: 1rem;
  width: 50%;
  height: 2rem;
`

const Confirm = styled.p `
  margin-top: 1rem;
  color: red;
  font-size: 1.5rem;
  text-align: center;
`
