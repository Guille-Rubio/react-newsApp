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
    this.context.login(user);

  }


  render() {
    return <div className="home">
      <form className="home__form" onSubmit={this.signup}>
        <input className="home__input" type="text" name="user" placeholder="Set User" />
        <button type="submit" className="home__button">Login</button>
      </form>
    </div>;
  }
}

export default Home;
