import React from 'react';
import styled from 'styled-components';

const DeleteItem = (props) => {

  return (
    <div className={props.viewDelete ? " " : "hidden"}>
      <Container>
        <Title>Would you like to delete this item from the inventory?</Title>
        <Button onClick={(id, cat)=>{props.deleteItem(props.deleteId, props.deleteCat)}}>Delete From Inventory</Button>
      </Container>
    </div>
  )
}

export default DeleteItem;

const Container =styled.div `
  width: 100%;
  height: 30%;
  margin-top: 2rem;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  background-color: pink;
  border: solid black 1px;
`
const Title = styled.h1 `
  margin-top: .5rem;
  color: black;
  margin-bottom: .5rem;
  font-size: 1rem;
  text-align: center;
`
const Button = styled.button `
  width: 80%;
  height: 2rem;
  font-size: 1rem;
  margin-bottom: 1rem;
  background-color: red;
  color: white;
`
