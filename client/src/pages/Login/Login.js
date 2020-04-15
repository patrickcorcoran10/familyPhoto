import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleUsername = (e) => {
    console.log("Username: ", e.target.value);
    this.setState({
      username: e.target.value,
    });
  };
  handlePassword = (e) => {
    console.log("Password: ", e.target.value);
    this.setState({
      password: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/login", {
        username: this.state.username,
        password: this.state.password,
      })
      .then((res) => {
        sessionStorage.setItem("jwt", res.data.token);
        this.props.history.push("/photo-grid");
        console.log(res.data.token);
      })
      .catch((error) => {
        alert(
          "Sorry!  Invalid email & password combination.  Please try again."
        );
        console.log(error);
      });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <h5>Log In</h5>
            <form>
              <div>
                <label>Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  required
                  onChange={
                    (this.handleUsername = this.handleUsername.bind(this))
                  }
                />{" "}
              </div>
              <div>
                <label>Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  onChange={
                    (this.handlePassword = this.handlePassword.bind(this))
                  }
                />
              </div>
              <button
                type="submit"
                onClick={(this.handleSubmit = this.handleSubmit.bind(this))}
              >
                Log In
              </button>
            </form>
            <a href="/login">Log In</a>
            <br />
            <a href="/register">Register</a>
            <br />
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    );
  }
}
