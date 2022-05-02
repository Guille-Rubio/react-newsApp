import '../src/styles/styles.scss'
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import { userContext } from "./context/userContext";



function App() {

  const [user, setUser] = useState("");
  const [news, setNews] = useState([]);

  const login = (user) => {
    setUser(user)
  }

  const logout = () => {
    setUser("")
  }

  const addNews = (newNews) => {
    console.log("saved news", news.length);
    console.log("news to save", newNews);
    setNews([ ...news, newNews ]);
    console.log(news.length)

  }



  const data = {
    login,
    logout,
    user,
    addNews
  }

  return (
    <div className="App">
      <BrowserRouter >
        <userContext.Provider value={data}>
          <Header />
          <Main />
        </userContext.Provider>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
