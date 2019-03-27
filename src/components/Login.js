import React, { Component } from 'react';
import styled from 'styled-components';
import { ThemeProvider } from '../theme';

const Form = styled.form`
  max-width: 80%;
  border-radius: 3px;
  margin: 5rem auto;
  padding: 2rem;
  border: 1px solid darkblue;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-content: space-evenly;
  div {
    margin-bottom: 1rem;
  }
  input {
  }
  button {
    background: forestgreen;
    border: none;
    padding: 0.25rem 1.5rem;
    border-radius: 4px;
    text-transform: uppercase;
    color: white;
  }
`;
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLoginSubmit = e => {
    const user = this.state.username;
    localStorage.setItem('user', user);
    window.location.reload();
  };

  render() {
    return (
      <ThemeProvider>
        <Form className="login-form">
          <h3>Welcome to React Insta Clone</h3>
          <div>Please Login</div>
          <div>
            <input
              type="text"
              placeholder="User Name"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <button
              type="button"
              color="success"
              size="large"
              onClick={this.handleLoginSubmit}
            >
              Log In
            </button>
          </div>
        </Form>
      </ThemeProvider>
    );
  }
}

export default Login;
