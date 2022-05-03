import React, { Component } from "react";
import NewsCard from './NewsCard/NewsCard'
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

const NYT_API_KEY = process.env.REACT_APP_NYT_API_KEY

class NewsList extends Component {

  constructor(props) {
    super(props)

    this.state = {
      user: '',
      news: this.props.news,
      load: [],//este es el estado que se pinta
    }
  }


  removeNews = (i) => {
    const remainingNews = this.state.load.filter((news, j) => i !== j)
    this.setState({ load: remainingNews });

  }

  async componentDidMount() {
    try {
      const apiNewsQuery = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=${NYT_API_KEY}`);
      const fiveNewsPreload = apiNewsQuery.data.response.docs.slice(0, 5);
      this.props.news === []
        ? this.setState({ load: fiveNewsPreload })
        : this.setState({ load: this.state.news.concat(fiveNewsPreload) })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return <div>
      <h1>Our news</h1>
      <section className="card-container">
        {this.state.load.map((news, i) => <NewsCard value={news} key={uuidv4()} index={i} remove={() => this.removeNews(i)} />)}
      </section>
    </div>;
  }
}

export default NewsList;
