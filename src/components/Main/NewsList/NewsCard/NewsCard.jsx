import React, { Component } from "react";

class NewsCard extends Component {
  render() {
    return <article>
      <h2>Headline</h2>
      <p>Abstract</p>
      <p>Source</p>
      <p>Article</p>
      <p>Author</p>
      <p>ArticleUrl</p>
      <p></p>

      <input type="text" placeholder="headline" />
      <input type="text" placeholder="abstract" />
      <input type="text" placeholder="source" />
      <textarea type="text" placeholder="article" />
      <input type="text" placeholder="author" />
      <input type="text" placeholder="articleUrl" />
      <button type="submit">Añadir</button>

    </article>;
  }
}

export default NewsCard;
