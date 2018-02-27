import React from 'react';
import styled from 'styled-components';

const ListNav = (props) => {

  return (
    <div id="list-nav">
        <Container>
          <LinkContent onClick={(view)=>{props.mobileViewSet('kitchen')}}>Kitchen</LinkContent>
          <LinkContent onClick={(view)=>{props.mobileViewSet('paper')}}>Paper</LinkContent>
          <LinkContent onClick={(view)=>{props.mobileViewSet('cleaning')}}>Cleaning</LinkContent>
          <LinkContent onClick={(view)=>{props.mobileViewSet('misc')}}>Misc</LinkContent>
        </Container>
    </div>
  )
}

export default ListNav;

const Container = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;

`
const LinkContent = styled.h1 `
  margin: .9rem;
  color: teal;
  font-size: 1rem;
  cursor: pointer;
`
