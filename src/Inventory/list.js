import React from 'react';
import styled from 'styled-components';
import ListItem from './listitem';



const List = (props) => {
  let kitchenList = props.kitchen;
  let cleaningList = props.cleaning;
  let miscList= props.misc;
  let paperList= props.paper;

  return (
    <div id="list-container">
      <ContainerOutside className={(props.mobileView === "kitchen" ) || (props.mobileView === "desktop") ? '' : 'hidden'}>
        <Container>
          <Title>Kitchen</Title>
          <ListSection>
            {kitchenList.map(item => <ListItem key={item.id} item={item} addItem={props.addItem} subtractItem={props.subtractItem} deleteId={props.deleteId} selectDelete={props.selectDelete}/>)}
          </ListSection>
        </Container>
      </ContainerOutside>
      <ContainerOutside className={(props.mobileView === "paper") || (props.mobileView === "desktop") ? '' : 'hidden'}>
        <Container>
          <Title id="paper">Paper</Title>
          <ListSection>
            {paperList.map(item => <ListItem key={item.id} item={item} addItem={props.addItem} subtractItem={props.subtractItem} deleteId={props.deleteId} selectDelete={props.selectDelete}/>)}
          </ListSection>
        </Container>
      </ContainerOutside>
      <ContainerOutside className={(props.mobileView === "cleaning" ) || (props.mobileView === "desktop") ? '' : 'hidden'}>
        <Container>
          <Title id="cleaning">Cleaning</Title>
          <ListSection>
            {cleaningList.map(item => <ListItem key={item.id} item={item} addItem={props.addItem} subtractItem={props.subtractItem} deleteId={props.deleteId} selectDelete={props.selectDelete}/>)}
          </ListSection>
        </Container>
      </ContainerOutside>
      <ContainerOutside className={(props.mobileView === "misc" ) || (props.mobileView === "desktop") ? '' : 'hidden'}>
        <Container>
          <Title id="misc">Misc</Title>
          <ListSection>
            {miscList.map(item => <ListItem key={item.id} item={item} addItem={props.addItem} subtractItem={props.subtractItem} deleteId={props.deleteId} selectDelete={props.selectDelete}/>)}
          </ListSection>
        </Container>
      </ContainerOutside>
    </div>
  )
}

export default List;

const ContainerOutside = styled.div `
  overflow: scroll;
`
const Container = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  border: solid black 1px;
  overflow: scroll;
  @media only screen and (max-width: 500px) {
    width: 100vw;
    height: 55vh;
  }
`
const Title = styled.h1 `
  margin-top: 1rem;
  color: teal;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  @media only screen and (max-width: 500px) {
    color: white;
  }
`
const ListSection = styled.ul `
  width: 100%;
  height: 100%;
  margin-left: 1rem;
`
