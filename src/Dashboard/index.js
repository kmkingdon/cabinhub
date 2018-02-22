import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import styled  from 'styled-components';



class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state= {

    }
  }

  render() {
    return (
      <div id="home">
        <Container>
          <Navigation>
            <Button>
              <StyledLink to="/register">
                Register Your Visit
              </StyledLink>
            </Button>
            <Button>
              <StyledLink to="/inventory">
                Check Item Inventory
              </StyledLink>
            </Button>
          </Navigation>
        </Container>
      </div>
    )
  }
}

export default Dashboard;

const Navigation = styled.nav `
  z-index: 1;
  position: relative;
  width: 100%;
  height: 20%;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
`

const Container = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
`

const Button = styled.div `
  width: 20%;
  height: 4rem;
  margin: 2rem;
  border: solid black 1px;
  background-color: grey;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
`

const StyledLink = styled(Link) `
  text-decoration: none;
  color: white;
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
`
