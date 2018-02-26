import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import banner from './banner.jpg';
import logo from './logo.png';

const Header = (props) => {


  if(props.authorized === false){
    return (
      <div id="header">
        <Banner>
          <StyledLink to="/"><Logo src={logo} alt="cabin logo"/></StyledLink>
        </Banner>
      </div>
    )
  } else {
    return (
      <div id="header">
        <Banner>
          <StyledLink to="/dashboard"><Logo src={logo} alt="cabin logo"/></StyledLink>
          <Logout onClick={(e)=> {props.logout(e)}}>Logout</Logout>
        </Banner>
      </div>
    )
  }
}


export default Header;

const Banner = styled.div `
  height: 100%;
  width: 100%;
  background-image: url(${banner});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 500px) {
    flex-direction: column;
  }
`
const StyledLink= styled(Link) `
  height: 15vh;
  width: 40%;
  @media only screen and (max-width: 500px) {
    height: 10vh;
    width: 90%;
  }
`
const Logo = styled.img `
  height: 100%;
  width: 100%;
`
const Logout = styled.h1`
  background-color: grey;
  padding: 1rem;
  margin-left: 4rem;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
  border: solid black 1px;
  @media only screen and (max-width: 500px) {
    margin-left: 0rem;
    padding: .5rem;
    font-size: 1rem;
  }
`
