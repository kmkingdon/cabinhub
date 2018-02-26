import React from 'react';
import styled from 'styled-components';


const FormEdit = (props) => {

  return (
    <div id="form" className={(props.formView === 'edit') ? '' : 'hidden' }>
      <Container>
        <Title>Edit This Visit</Title>
        <Form onSubmit={(e, id)=>{props.handleSubmitEdit(e, props.selectedEvent.id)}}>
          <Label>Who is going to the Cabin?</Label>
          <Input required type="text" name="title" placeholder={props.selectedEvent.title}/>
          <Label>When does your stay start?</Label>
          <Input required  type="date" name="start" />
          <Label>When does your stay end?</Label>
          <Input required type="date" name="end" />
          <Submit type="submit" name="Edit" value="Edit"/>
        </Form>
        <Confirm className={props.confirmForm ? '' : 'hidden'}>Thank you for editing your visit! </Confirm>
        <ButtonContainer>
          <Delete onClick={(id)=>{props.handleDelete(props.selectedEvent.id)}}> Delete This Visit </Delete>
          <Back onClick={props.back}> Go Back to New Visit </Back>
        </ButtonContainer>
      </Container>
    </div>
  )
}

export default FormEdit;

const Container =styled.div `
  width: 90%;
  height: 90%;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
`
const ButtonContainer =styled.div `
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`
const Title = styled.h1 `
  margin-top: 1rem;
  color: teal;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  @media only screen and (max-width: 500px) {
    margin-bottom: .5rem;
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
  border: solid black 1px;
  margin-top: 1rem;
  width: 50%;
  height: 2rem;
`

const Confirm = styled.p `
  margin-top: 1rem;
  color: red;
  font-size: 1rem;
  text-align: center;
`
const Delete = styled.button `
  font-size: .6rem;
  background-color: red;
  color: white;
  border: solid black 1px;
  margin-right: 1rem;
  width: 45%;
  height: 1.5rem;
`

const Back = styled.button `
  font-size: .6rem;
  background-color: white;
  border: solid black 1px;
  color: black;
  width: 45%;
  height: 1.5rem;
`
