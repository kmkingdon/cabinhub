import React from 'react';
import styled from 'styled-components';
import Navigation from '../Navigation';


const Contacts = (props) => {

    return (
      <div id="contacts">
        <Navigation userName={props.userName}/>
        <Container id="contacts-list">
          <Title>Contacts</Title>
          <Container>
            <Subtitle>Snow Removal</Subtitle>
            <Contact>
              <Name>Ron Sears</Name>
              <Info>Main Road Plowing</Info>
              <Info>970-887-0339</Info>
              <Info>PO Box 180 Grand Lake, CO 80447</Info>
            </Contact>
            <Contact>
              <Name>Dustin Entz</Name>
              <Info>Drive Way Plowing</Info>
              <Info>970-531-1104</Info>
              <Info>*Best to send text message</Info>
            </Contact>
          </Container>
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

const Subtitle = styled.h2 `
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: teal;
  font-size: 1.5rem;
`

const Contact = styled.div `
  width: 60vw;
  display: flex;
  flex-flow: column;
  justify-items: center;
  align-items: space-around;
  margin-bottom: 1rem;
  border: solid grey 1px;
`

const Name = styled.h3`
  color: black;
  font-size: 1.5rem;
  margin: .5rem;
  text-align: center;
`
const Info = styled.p`
  color: grey;
  font-size: 1rem;
  margin: .2rem;
  text-align: center;
`