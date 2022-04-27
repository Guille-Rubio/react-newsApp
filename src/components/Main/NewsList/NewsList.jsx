import React, { Component } from "react";
import NewsCard from './NewsCard/NewsCard'

class NewsList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       user:''
    }
  }
  render() {
    return <div>
      <NewsCard />
    </div>;
  }
}

export default NewsList;
