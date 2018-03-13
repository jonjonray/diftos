import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

class Auth extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      message: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }
  onChange(e){
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit(e, type){
    e.preventDefault();
    const { username, password } = this.state;

    if (type === "login") {
      axios.post('/api/auth/login', { username, password })
        .then((result) => {
          localStorage.setItem('jwtToken', result.data.token);
          localStorage.setItem('userId', result.data.id);
          this.setState({ message: '' });
          this.props.history.push('/');
        })
        .catch((error) => {
          if(error.response.status === 401) {
            this.setState({ message: 'Login failed. Username or password not match' });
          }
        });
    } else {

      axios.post('/api/auth/register', { username, password })
           .then((result) => {
             localStorage.setItem('jwtToken', result.data.token);
             localStorage.setItem('userId', result.data.id);
             this.setState({ message: '' });
             this.props.history.push("/");
           });
    }

  }


  componentWillMount(){
    if (localStorage.getItem("jwtToken") !== null) {
      this.props.history.push('/');
    }
  }

  render() {
    const { username, password, message } = this.state;
    return (
      <div className="form-container">
        <form className="form-signin">
          {message !== '' &&
            <div role="alert">
              { message }
            </div>
          }
          <h2 className="form-heading">Please sign in</h2>
          <TextField style={{margin: "20px"}}
                      value={username}
                      type="email"
                      name="username"
                      floatingLabelText="Email"
                      onChange={this.onChange}
                      required />
          <TextField type="password"
                    floatingLabelText="Password"
                    style={{margin: "20px"}}
                    name="password"
                    value={password}
                    onChange={this.onChange} required/>

          <FlatButton type="submit"
                      backgroundColor="#ffcc80"
                      onClick={(e) => this.onSubmit(e, "login")}>Login</FlatButton>

                      <br></br>
          <FlatButton type="submit"
                      onClick={(e) => this.onSubmit(e, "signup")}>Sign Up</FlatButton>
        </form>
      </div>
    );
  }
}

export default Auth;
