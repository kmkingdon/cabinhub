import React from 'react';
import styled from 'styled-components';
import Navigation from '../Navigation';


const Contacts = (props) => {

    return (
      <div id="contacts">
        <Navigation userName={props.userName}/>
        <Container id="contacts-list">
          <Title>Contacts</Title>
        </Container>
      </div>
    )

}

export default Contacts;

const Container = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  border: solid black 1px;
  overflow: scroll;
`

const Title = styled.h1 `
  margin-top: 1rem;
  color: teal;
  margin-bottom: 2rem;
  font-size: 2rem;
`
