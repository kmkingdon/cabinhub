import React from 'react';
import styled from 'styled-components';


const FormItem = (props) => {

  return (
    <div id="form-item" >
      <Container>
        <Title>Add an Item to the Inventory:</Title>
        <Form onSubmit={(e)=>{props.handleSubmitItem(e)}}>
          <Label>What is the name of the item?</Label>
            <Input required type="text" name="itemName" placeholder="Item Name"/>
          <Label>What Category?</Label>
            <Select required name="cat">
              <option value="">Select a Category</option>
              <option value="Kitchen">Kitchen</option>
              <option value="Cleaning">Cleaning</option>
              <option value="Paper Products">Paper Products</option>
              <option value="Misc">Miscellaneous</option>
            </Select>
          <Label>What is the currentAmmount</Label>
            <Input required  type="number" name="currentAmmount" />
          <Submit type="submit" name="submit"/>
        </Form>
      </Container>
    </div>
  )
}

export default FormItem;

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
  color: white;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  text-align: center;
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
`
const Select = styled.select `
  font-size: 1rem;
  margin-top: 1rem;
  width: 100%;
  height: 2rem;
`

const Submit = styled.input `
  font-size: 1rem;
  background-color: teal;
  color: white;
  margin-top: 1rem;
  width: 50%;
  height: 2rem;
`
