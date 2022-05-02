import React, { Component } from "react";


class NewsCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      first: ""
    }
  }



  render() {
    return <article className="news-cards">

      <h2>{this.props.value.headline.main}</h2>
      <hr></hr>
      <p>{this.props.value.abstract}</p>
      <p>{this.props.value.lead_paragraph}...<a href={this.props.value.weburl}>leer mas</a></p>
      
      {/* <p>{this.props.value.byline.original}</p> */}
      
    </article>;
  }
}

export default NewsCard;
