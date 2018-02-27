import React from 'react';
import styled from 'styled-components';
import ListItem from './listitem';



const KitchenList = (props) => {
  let kitchenList = props.kitchen;


  return (
      <ContainerOutside className={(props.mobileView === "kitchen" ) || (props.mobileView === "desktop") ? '' : 'hidden'}>
        <Container>
          <Title>Kitchen</Title>
          <ListSection>
            {kitchenList.map(item => <ListItem key={item.id} item={item} addItem={props.addItem} subtractItem={props.subtractItem} deleteId={props.deleteId} selectDelete={props.selectDelete}/>)}
          </ListSection>
        </Container>
      </ContainerOutside>
  )
}

export default KitchenList;

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
    color: teal;
  }
`
const ListSection = styled.ul `
  width: 100%;
  height: 100%;
  margin-left: 1rem;
`
