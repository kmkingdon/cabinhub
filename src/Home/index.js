import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import styled  from 'styled-components';
import home1 from './home1.jpg';
import home2 from './home2.jpg';
import home3 from './home3.jpg';
import home4 from './home4.jpg';
import home5 from './home5.jpg';
import home6 from './home6.jpg';


class Home extends Component {
  constructor(props) {
    super(props)
    this.state= {
      background: home1,
      index: 0
    }
    this.changeBackground = this.changeBackground.bind(this);
  }

  componentDidMount() {
    setTimeout(this.changeBackground, 5000)
  }

  changeBackground() {
    const backgroundArray=[ home1, home2, home3, home4, home5 , home6];
    let index= this.state.index;
    if(index === 5) {
      this.setState({index: 0});
      this.setState({background: backgroundArray[index]});
      setTimeout((e)=>{this.changeBackground(e)}, 5000);
    } else {
      index++
      this.setState({background: backgroundArray[index]});
      this.setState({index: index});
      setTimeout((e)=>{this.changeBackground(e)}, 5000);
    }
  }

  render() {
    return (
      <div id="home">
        <Background src={this.state.background} />
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

export default Home;

const Background = styled.img `
  height: 75vh;
  width: 100%;
  z-index: -1;
  position: absolute;
`

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
