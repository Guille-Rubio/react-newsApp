import React, { Component } from "react";
import { userContext } from "../../../context/userContext";


class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: ''
    }
  }
  static contextType = userContext;




  signup = (event) => {
    event.preventDefault();
    const user = event.target.user.value;
    this.setState({user})
    this.context[0](user);

  }


  render() {
    return <div>
      <form onSubmit={this.signup}>
        <input type="text" name="user" placeholder="Set User" />
        <button type="submit">Login</button>
      </form>
    </div>;
  }
}

export default Home;
