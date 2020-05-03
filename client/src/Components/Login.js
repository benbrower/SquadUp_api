import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Form,
  Container,
  Header,
  Segment,
  Button,
  Icon,
  Dimmer,
  Loader,
  Divider,
  Responsive,
  Card,
} from "semantic-ui-react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleUserChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handlePasswordChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleLogin(this.state);
  };

  changeForm = (event) => {
    this.setState({
      form: event.target.value,
    });
  };

  getHeader = () => {
    let message = "";
    this.props.logged_in
      ? (message = `Welcome, ${this.props.user.username}`)
      : (message = `Log In or Sign Up`);
    return (
      <Container text>
        <Header as='h2' icon textAlign='center' color='blue'>
          <Icon name='user circle outline' circular />
          <Header.Content>{message}</Header.Content>
        </Header>
      </Container>
    );
  };

  render() {
    return this.props.logged_in ? (
      <>
        <div>
          {this.getHeader()}
          <Button as={Link} to='/account' name='account' attached='bottom'>
            View Account
          </Button>
        </div>
      </>
    ) : (
      <div>
        {/* <Card> */}
        <Responsive width={window.innerHeight}>
          {this.getHeader()}
          <Form onSubmit={this.handleSubmit}>
            <Divider hidden section />
            <Button.Group attached='top' size='big' widths='2'>
              <Button name='login' onClick={this.changeForm} color='blue'>
                Log In
              </Button>
              <Button.Or />
              <Button
                as={Link}
                to='/signup'
                name='signup'
                onClick={this.changeForm}
              >
                Sign Up
              </Button>
            </Button.Group>
            <Divider section />
            <Form.Field>
              <label>
                Username:
                <input
                  placeholder='Username'
                  id='username'
                  name='username'
                  type='text'
                  onChange={this.handleUserChange}
                  value={this.state.username}
                />
              </label>
            </Form.Field>
            <Form.Field>
              <label>
                Password:
                <input
                  placeholder='Password'
                  id='passsword'
                  name='password'
                  type='password'
                  onChange={this.handlePasswordChange}
                  value={this.state.password}
                />
              </label>
            </Form.Field>
            <div>
              <Button type='submit'>Log in</Button>
            </div>
          </Form>
        </Responsive>
        {/* </Card> */}
      </div>
    );
  }
}
export default Login;
