import React, { Component } from 'react';
import styled  from 'styled-components';
import Navigation from '../Navigation';
import home1 from './home1.jpg';
import home2 from './home2.jpg';
import home3 from './home3.jpg';
import home4 from './home4.jpg';
import home5 from './home5.jpg';
import home6 from './home6.jpg';


class Dashboard extends Component {
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
    if(this.refs.myTestRef) {
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
  }

  render() {
    return (
      <div id="dashboard" ref="myTestRef">
        <Navigation userName={this.props.userName}/>
        <Background id="background" src={this.state.background} />
      </div>
    )
  }
}

export default Dashboard;

const Background = styled.img `
  height: 100%;
  width: 100%;
`
