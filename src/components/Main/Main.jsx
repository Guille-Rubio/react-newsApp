import React, { Component } from "react";
import { Route, Routes } from 'react-router-dom';
import AddNewsFrom from './AddNewsForm/AddNewsForm';
import Home from './Home';
import NewsList from './NewsList';



class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
       news:[]
    }
  }

  addNews (newNews){
    console.log("Main argument", newNews)
    /* this.setState({news:[ ...this.state.news, newNews ]}); */
    this.setState({news:[...this.state.news, newNews]});
    

  }

 

  render() {
    return <div>
      <h2>News</h2>

      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Home />} path="/home" />
        <Route element={<AddNewsFrom add={(newNews) => this.addNews(newNews)}/>} path="/form" />
        <Route element={<NewsList news={this.state.news} />} path="/list" />
        
      </Routes>

    </div>;

  }
}

export default Main;
