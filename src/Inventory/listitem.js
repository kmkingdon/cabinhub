import React from 'react';
import styled from 'styled-components';



const ListItem = (props) => {

  return (
    <Container id={(props.item.id === props.deleteId) ? "selected" : " "} >
      <Name id={(props.item.currentAmmount === 0) ? "emphasize" : ""} onClick={(id, cat)=>{props.selectDelete(props.item.id, props.item.cat)}}>{props.item.itemName}</Name>
      <Amount>{props.item.currentAmmount}</Amount>
      <Add  onClick={(id, cat)=>{
        props.addItem(props.item.id, props.item.cat)
      }}
      > + </Add>
      <Subtract onClick={(id, cat)=>{
        props.subtractItem(props.item.id, props.item.cat)}}> - </Subtract>
    </Container>
  )
}

export default ListItem;

const Container = styled.li `
  width: 90%;
  height: 2rem;
  border: solid black 1px;
  margin-bottom: .8rem;
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 60% 10% 15% 15%;
  @media only screen and (max-width: 500px) {
    background-color: white;
  }
`

const Name = styled.h1 `
  grid-row: 1/2;
  grid-column: 1/2;
  justify-self: start;
  align-self: center;
  margin-left: .2rem;
  cursor: pointer;
`

const Amount = styled.h2 `
  grid-row: 1/2;
  grid-column: 2/3;
  justify-self: start;
  align-self: center;
  margin-left: .2rem;
`

const Add = styled.div `
  grid-row: 1/2;
  grid-column: 3/4;
  justify-self: center;
  align-self: center;
  border-radius: 100%;
  border: solid black 1px;
  width: 50%;
  height: 50%;
  text-align: center;
  background-color: green;
  color: white;
  cursor: pointer;
`

const Subtract = styled.div `
  grid-row: 1/2;
  grid-column: 4/5;
  justify-self: center;
  align-self: center;
  border-radius: 100%;
  border: solid black 1px;
  width: 50%;
  height: 50%;
  text-align: center;
  background-color: red;
  color: white;
  cursor: pointer;
`
