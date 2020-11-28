import React, { Component } from "react";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  onInputChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5>Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.onInputChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={this.onInputChange}
              autoComplete="off"
            />
          </div>
          <div className="input-field">
            <button>Log In</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
