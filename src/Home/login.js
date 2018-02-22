import React from 'react';
import styled from 'styled-components';


const Login = (props) => {

  if (props.authenticated === null) return null;
    return props.authenticated ?
      <button onClick={props.auth.logout}>Logout</button> :
      <button onClick={props.auth.login}>Login</button>;

}

export default Login;
