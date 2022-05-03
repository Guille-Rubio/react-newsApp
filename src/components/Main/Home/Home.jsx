import React, { Component } from "react";
import { userContext } from "../../../context/userContext";
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";


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
        <TextField id="standard-basic" label="user" variant="standard" name="user" />
        <Button type="submit" variant="contained">Login</Button>
      </form>
    </div>;
  }
}

export default Home;
