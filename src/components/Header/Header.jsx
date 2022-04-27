import React, { Component } from "react";
import Nav from './Nav';

class Header extends Component {
  render() {
    return <div>
      <p>usuario logado</p>
      <Nav />
      <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fhae-ino.org%2Fnews%2F&psig=AOvVaw3Dsp6WNmltvrPbvcy4ubLp&ust=1651156862021000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKi0ieW8tPcCFQAAAAAdAAAAABAD" alt="logo"></img>

    </div>;
  }
}

export default Header;
