import React from 'react';
import { withRouter } from 'react-router-dom';

import '../stylings/login_form.css'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  // Once the user has been authenticated, redirect to the Swipes page
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      // this.props.history.push('/swipes');
      // console.log("Log in Successful")
    }

    // Set or clear errors
    this.setState({errors: nextProps.errors})
  }

  // Handle field updates (called in the render method)
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user); 
  }

  handleDemoLogin() {
    return () => {
      this.setState({
        email: "demo@swipex.com",
        password: "12345678"
      })
    }
  }

  // Render the session errors if there are any
  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="login-form">
            <img className="logo"src="images/swipex_logo_80px_h.png" alt="logo"/>
              <input type="text" className="login-input"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />
            <br/>
              <input type="password" className="login-input"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
            <br/>
            <input className="login-button" type="submit" value="Log In" />
            {this.renderErrors()}
            {/* <button className="login-button" onClick={() => this.props.login(this.props.demoUser)}>Demo</button> */}
            <button className="login-button" onClick={this.handleDemoLogin()}>Demo</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);