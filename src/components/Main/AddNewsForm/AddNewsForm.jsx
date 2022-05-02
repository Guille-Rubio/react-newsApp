import React, { Component } from "react";
//import { userContext } from '../../../context/userContext';

class AddNewsForm extends Component {
/*   static contextType = userContext; */
  constructor(props) {
    super(props)

    this.state = {
      user: '',
      news:[]
    }
    this.addOwnNews = this.addOwnNews.bind(this)
  }

/*   addNews = (event) => {
    event.preventDefault()
    const { headline, abstract, first_paragraph, author, articleUrl } = event.target
    const newNews = {
      headline: headline.value,
      abstract: abstract.value,
      first_paragraph: first_paragraph.value,
      author: author.value,
      articleUrl: articleUrl.value
    }
    this.context.addNews(newNews)
  } */

  addOwnNews(event){
    event.preventDefault()
    const { headline, abstract, first_paragraph, author, articleUrl } = event.target
    const newNews = {
      headline: headline.value,
      abstract: abstract.value,
      first_paragraph: first_paragraph.value,
      author: author.value,
      articleUrl: articleUrl.value
    }
    
    this.props.add(newNews)

    event.target.reset();
  }



  render() {
    return <div>
      <h3>Add the latest news to our app</h3>
     {/*  <userContext.Consumer>{() => */}
        <form className="add-news__form" onSubmit={this.addOwnNews}>
          <input className="add-news__input" type="text" name="headline" placeholder="headline" />
          <textarea className="add-news__textarea" type="text" name="abstract" placeholder="abstract" />
          <input className="add-news__input" type="text" name="first_paragraph" placeholder="source" />
          <input className="add-news__input" type="text" name="author" placeholder="author" />
          <input className="add-news__input" type="text" name="articleUrl" placeholder="articleUrl" />
          <button className="add-news__submit" type="submit">Añadir</button>
        </form>
     {/*  }
      </userContext.Consumer> */}
    </div>;
  }
}

export default AddNewsForm;
