import React, { Component } from 'react';
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
      <div id="home" ref="myTestRef">
        <Background src={this.state.background} />
        <Container>
          <Title>Login To Cabin Hub:</Title>
          <Form onSubmit={(e)=>{this.props.login(e)}}>
            <Label>Email</Label>
              <Input  type="text" name="email" placeholder="Enter Your Email" value="kmkingdon@gmail.com"/>
            <Label>Password</Label>
              <Input type="password" name="password" placeholder="Password" value="samplePassword"/>
            <Error>{this.props.error}</Error>
            <Submit type="submit" name="submit" value="Login"/>
          </Form>
        </Container>
      </div>
    )
  }
}

export default Home;

const Background = styled.img `
  height: 80vh;
  width: 100%;
  z-index: -1;
  position: absolute;
`

const Container = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1 `
margin-top: 1rem;
color: grey;
background-color: white;
border: solid black 1px;
padding: 1rem;
margin-bottom: 2rem;
font-size: 1.5rem;
text-align: center;
`
const Form = styled.form `
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
width: 40%;
background-color: white;
border: solid black 1px;
@media only screen and (max-width: 500px) {
  width: 90%;
}
`
const Label = styled.label `
text-align: left;
font-size: 1rem;
margin-top: 1rem;
width: 80%;
`
const Input = styled.input `
font-size: 1rem;
margin-top: 1rem;
width: 80%;
height: 2rem;
border: solid black 1px;
`

const Submit = styled.input `
font-size: 1rem;
background-color: teal;
color: white;
margin-top: 1rem;
margin-bottom: 1rem;
width: 50%;
height: 2rem;
`
const Error = styled.p `
text-align: center;
font-size: .8rem;
color: red;
`
