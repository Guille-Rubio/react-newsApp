import React, { Component } from "react";

class AddNewsForm extends Component {
  render() {
    return <div>
      <h3>Add the latest news to our app</h3>
      <form>
        <input type="text" placeholder="headline" />
        <input type="text" placeholder="abstract" />
        <input type="text" placeholder="source" />
        <textarea type="text" placeholder="article" />
        <input type="text" placeholder="author" />
        <input type="text" placeholder="articleUrl" />
        <button type="submit">Añadir</button>
      </form>
    </div>;
  }
}

export default AddNewsForm;
