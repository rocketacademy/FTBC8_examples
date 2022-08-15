import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      username: "",
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(this.state.email, this.state.password, this.state.username);
  };

  render() {
    return (
      <div>
        <h2>{this.props.login == "login" ? "Login Form" : "Signup Form"}</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label> <br />
          <input
            name="username"
            type="text"
            value={this.state.username}
            onChange={(e) => this.handleChange(e)}
            placeholder="Sam O'Shaughnessy"
          />
          <br />
          <label>Email:</label> <br />
          <input
            name="email"
            type="text"
            onChange={(e) => this.handleChange(e)}
            value={this.state.email}
            placeholder="sam@sam.com"
          />
          <br />
          <label>Password:</label> <br />
          <input
            name="password"
            type="text"
            onChange={(e) => this.handleChange(e)}
            value={this.state.password}
            placeholder="123"
          />
          <br />
          <input
            type="submit"
            value={this.props.login === "login" ? "Login" : "Signup"}
          />
        </form>
      </div>
    );
  }
}
