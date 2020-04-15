import React, { Component } from "react";
import superagent from "superagent";
// import axios from "axios";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleName = (e) => {
    console.log("Name:", e.target.value);
    this.setState({
      name: e.target.value,
    });
  };
  handleUsername = (e) => {
    console.log("Username: ", e.target.value);
    this.setState({
      username: e.target.value,
    });
  };
  handlePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("line 29", this.state);
    // axios
    //   .post("/api/register", {
    //     username: this.state.username,
    //     password: this.state.password,
    //   })
    //   .then((res) => {
    //     this.props.history.push("/login");
    //   })
    //   .catch((error) => {
    //     alert(
    //       "Sorry!  Invalid email & password combination.  Please try again."
    //     );
    //     console.log(error);
    //   });

    superagent
      .post("/api/register")
      .send({
        // name: this.state.name,
        username: this.state.username,
        password: this.state.password,
      })
      .end((err, res) => {
        console.log(res);
        // window.location.replace(res);
      });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <h5>Register</h5>
            <form>
              <div>
                <label>Name</label>
                <input
                  id="name"
                  name="name"
                  required
                  onChange={(this.handleName = this.handleName.bind(this))}
                />
              </div>
              <div>
                <label>Username</label>
                <input
                  id="username"
                  name="username"
                  required
                  onChange={
                    (this.handleUsername = this.handleUsername.bind(this))
                  }
                />
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
                Register
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
