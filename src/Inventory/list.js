import React from 'react';
import styled from 'styled-components';
import KitchenList from './kitchenlist';
import PaperList from './paperlist';
import CleaningList from './cleaninglist';
import MiscList from './misclist';


const List = (props) => {

  return (
    <div id="list-container">
      <KitchenList kitchen={props.kitchen}
      addItem={props.addItem}
      subtractItem={props.subtractItem}
      deleteId={props.deleteId}
      selectDelete={props.selectDelete}
      mobileView={props.mobileView}
      />
      <PaperList paper={props.paper}
      addItem={props.addItem}
      subtractItem={props.subtractItem}
      deleteId={props.deleteId}
      selectDelete={props.selectDelete}
      mobileView={props.mobileView}
      />
      <CleaningList cleaning={props.cleaning}
      addItem={props.addItem}
      subtractItem={props.subtractItem}
      deleteId={props.deleteId}
      selectDelete={props.selectDelete}
      mobileView={props.mobileView}
      />
      <MiscList misc={props.misc}
      addItem={props.addItem}
      subtractItem={props.subtractItem}
      deleteId={props.deleteId}
      selectDelete={props.selectDelete}
      mobileView={props.mobileView}
      />
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
    color: teal;
  }
`
const ListSection = styled.ul `
  width: 100%;
  height: 100%;
  margin-left: 1rem;
`
