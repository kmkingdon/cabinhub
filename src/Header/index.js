import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import banner from './banner.jpg';
import logo from './logo.png';

const Header = (props) => {

  return (
    <div id="header">
      <Banner>
        <StyledLink to="/"><Logo src={logo} alt="cabin logo"/></StyledLink>
      </Banner>
    </div>
  )
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
`
const StyledLink= styled(Link) `
  height: 15vh;
  width: 35%;
`
const Logo = styled.img `
  height: 100%;
  width: 100%;
`
