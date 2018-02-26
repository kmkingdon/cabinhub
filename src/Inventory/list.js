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
      <ContainerOutside>
        <Container>
          <Title>Kitchen</Title>
          <ListSection>
            {kitchenList.map(item => <ListItem key={item.id} item={item} addItem={props.addItem} subtractItem={props.subtractItem} deleteId={props.deleteId} selectDelete={props.selectDelete}/>)}
          </ListSection>
        </Container>
      </ContainerOutside>
      <ContainerOutside>
        <Container>
          <Title>Paper</Title>
          <ListSection>
            {paperList.map(item => <ListItem key={item.id} item={item} addItem={props.addItem} subtractItem={props.subtractItem} deleteId={props.deleteId} selectDelete={props.selectDelete}/>)}
          </ListSection>
        </Container>
      </ContainerOutside>
      <ContainerOutside>
        <Container>
          <Title>Cleaning</Title>
          <ListSection>
            {cleaningList.map(item => <ListItem key={item.id} item={item} addItem={props.addItem} subtractItem={props.subtractItem} deleteId={props.deleteId} selectDelete={props.selectDelete}/>)}
          </ListSection>
        </Container>
      </ContainerOutside>
      <ContainerOutside>
        <Container>
          <Title>Misc</Title>
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
    overflow: hidden;
  }
`
const Title = styled.h1 `
  margin-top: 1rem;
  color: teal;
  margin-bottom: 2rem;
  font-size: 1.5rem;
`
const ListSection = styled.ul `
  width: 100%;
  height: 100%;
  margin-left: 1rem;
`
