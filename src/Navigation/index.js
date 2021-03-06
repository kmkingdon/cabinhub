import React from 'react';
import { Link } from 'react-router-dom';
import styled  from 'styled-components';


const Navigation = (props)=> {

    return (
      <div id="navigation">
          <NavigationContainer>
            <Welcome> Welcome {props.userName}:</Welcome>
            <Button>
              <StyledLink to="/register">
                Calendar
              </StyledLink>
            </Button>
            <Button>
              <StyledLink to="/inventory">
                Inventory
              </StyledLink>
            </Button>
            <Button>
              <StyledLink to="/contacts">
                Contacts
              </StyledLink>
            </Button>
          </NavigationContainer>
      </div>
    )
}

export default Navigation;


const NavigationContainer = styled.nav `
  background-color: grey;
  display: flex;
  flex-flow: row ;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 500px) {
    flex-flow: row wrap;
    justify-content: center;
  }
`

const Welcome = styled.h1 `
  margin: 0rem 2rem;
  font-size: 1.5rem;
  color: white;
  @media only screen and (max-width: 500px) {
    margin-top: .5rem;
    margin-bottom: .5rem;
  }
`

const Button = styled.div `
  width: 15%;
  height: 3rem;
  margin: 2rem;
  border: solid black 1px;
  background-color: teal;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 500px) {
    width: 25%;
    margin: .5rem .5rem;
    height: 2rem;
  }
`

const StyledLink = styled(Link) `
  text-decoration: none;
  color: white;
  width: 100%;
  text-align: center;
  font-size: 1.3rem;
  @media only screen and (max-width: 500px) {
    font-size: .8rem;
  }
`
