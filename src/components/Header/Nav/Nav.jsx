import React, { Component } from "react";
import Link from 'react';


class Nav extends Component {
  render() {
    return <nav>
      <Link to="">Home</Link>
      <Link to="">News List</Link>
      <Link to="">Add News</Link>
      
    </nav>;
  }
}

export default Nav;
