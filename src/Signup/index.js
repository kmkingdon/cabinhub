import React from "react";
import styled from "styled-components";


class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      confirmPassword: "",
      passwordMatch: false,
      passwordWrong: false,
    };
  }

  checkPassword(value) {
    this.setState({ password: value });
  }

  confirmPassword(value) {
    this.setState({ confirmPassword: value }, this.printConfirmation);
  }

  printConfirmation() {
    if (this.state.password !== this.state.confirmPassword) {
      this.setState({ passwordWrong: true });
    } else {
      this.setState({ passwordMatch: true });
      this.setState({ passwordWrong: false });
      setTimeout(() => {
        this.setState({ passwordMatch: false });
      }, 5000);
    }
  }

  render() {

    return (
      <Container>
          <UserForm onSubmit={(e)=> {this.props.signup(e)}}>
              <Title className="form-title">Create Your Profile</Title>
              <Label htmlFor="email">Email</Label>
              <InputField
                required
                type="text"
                name="email"
                placeholder="Enter Your Email"
                onChange={this.props.checkUserName}
              />
              <UsernameWarning
                className={this.props.warningUsername ? "" : "hidden"}
              >
                *Email already exists. Please enter a unique email or login.*
              </UsernameWarning>

              <Label htmlFor="username">Name</Label>
              <InputField
                required
                type="text"
                name="username"
                placeholder="Enter Your First and Last Name"
              />

              <Label htmlFor="password">Password</Label>
              <InputField
                required
                type="password"
                name="password"
                placeholder="Create a Password"
                onChange={event => {
                  this.checkPassword(event.target.value);
                }}
              />

              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <InputField
                required
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={event => {
                  this.confirmPassword(event.target.value);
                }}
              />
              <PasswordAcceptance
                className={this.state.passwordMatch ? "" : "hidden"}
              >
                *Passwords Match*
              </PasswordAcceptance>
              <UsernameWarning
                className={this.state.passwordWrong ? "" : "hidden"}
              >
                *Passwords Do Not Match*
              </UsernameWarning>

            <SubmitButton type="submit" name="submit" value="Submit" />
          </UserForm>
      </Container>
    );
  }
}

export default SignUp;

const UsernameWarning = styled.span`
  color: red;
  font-size: 10px;
`;

const PasswordAcceptance = styled.span`
  color: green;
  font-size: 10px;
`;

const SubmitButton = styled.input`
  background: teal;
  border-radius: 3px;
  font-family: Arial;
  width: 50%;
  color: white;
  color: white;
  font-size: 20px;
  padding: 10px 20px 10px 20px;
  margin-top: 0.5rem;
  text-decoration: none;
`;

const UserForm = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  width: 60%;
  heigth: 100%;
`;

const Label = styled.label `
  font-size: 1.3rem;
`


const InputField = styled.input`
  font-size: 1rem;
  width: 70%;
  margin-bottom: 2rem;
  height: 2rem;
`;

const Title = styled.h2`
  font-size: 1.5em;
  color: teal;
  margin: 2rem 0rem;
`;


const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Paragraph = styled.h2`
  padding = 1rem 0 2rem 0;
  font-size = 2rem;
`;
