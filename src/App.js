import '../src/styles/styles.scss'
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import { userContext } from "./context/userContext";



function App() {

  const [user, setUser] = useState("");
  /* const [news, setNews] = useState([]) */

  const login = (user) => {
    console.log("llego");
    setUser({user})
  }

  const logout = () => {
    setUser("")
  }

  const data = [
    login,
    logout,
    user
  ]

  return (
    <div className="App">
      <BrowserRouter >
        <userContext.Provider value={data}>
          <Header data={data}/>
          <Main />
        </userContext.Provider>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
