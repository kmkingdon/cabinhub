import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';
import Login from './login';
import styled  from 'styled-components';
import home1 from './home1.jpg';
import home2 from './home2.jpg';
import home3 from './home3.jpg';
import home4 from './home4.jpg';
import home5 from './home5.jpg';
import home6 from './home6.jpg';


export default withAuth(class Home extends Component {
  constructor(props) {
    super(props)
    this.state= {
      background: home1,
      index: 0,
      authenticated: null
    }
    this.changeBackground = this.changeBackground.bind(this);
    this.checkAuthentication = this.checkAuthentication.bind(this);
    this.checkAuthentication();
  }

  componentDidMount() {
    setTimeout(this.changeBackground, 5000);
    this.checkAuthentication();
  }

  async checkAuthentication() {
   const authenticated = await this.props.auth.isAuthenticated();
   if (authenticated !== this.state.authenticated) {
     this.setState({ authenticated });
   }
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
          <Login authenticated={this.state.authenticated}/>
        </Container>
      </div>
    )
  }
})


const Background = styled.img `
  height: 75vh;
  width: 100%;
  z-index: -1;
  position: absolute;
`

const Container = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
`
