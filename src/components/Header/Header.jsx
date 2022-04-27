import React, { Component } from "react";
import Nav from './Nav';
import logo from '../../assets/img/news.png';


class Header extends Component {


  render() {
    return <header>

      {this.props.data[2].user ?
        <>
          <p>¡Hola {this.props.data[2].user}!</p>
          <button onClick={this.props.data[1]}>Logout</button>
        </> 
        : ""}
      <Nav />
      <img src={logo} alt="logo"></img>

    </header>;
  }
}

export default Header;
