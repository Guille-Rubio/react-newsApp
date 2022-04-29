import React, { Component } from "react";
import Nav from './Nav';
import logo from '../../assets/img/news.png';
import { userContext } from "../../context/userContext";


class Header extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       user:""
    }
  }

  static contextType = userContext;

  render() {
    return <header>
      <userContext.Consumer>
        {(value) => value.user?
            <>
              <p>¡Hola {value.user}!</p>
              <button onClick={value.logout}>Logout</button>
            </>
            : ""
        }
        
      </userContext.Consumer>
      <Nav />
      <img src={logo} alt="logo"></img>

    </header>;
  }
}

export default Header;
