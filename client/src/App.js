import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
/* import Signup from './components/Signup'; */
import Search from './pages/Search';
import Saved from './pages/Saved';
import Main from './pages/Main';
// import AboutPage from './pages/AboutPage';
import AboutPage from './components/About';
import Auth from './components/Auth/Auth';

function App() {
    const user = JSON.parse(localStorage.getItem('profile'));
  
  return (
    
    <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/auth" component={() => (!user ? <Auth /> : <Redirect to="/" />)}></Route>
          <Route exact path="/search" component={Search}/>
          <Route exact path="/saved" component={Saved}/>
          <Route exact path="/about" component={AboutPage}/>
        </Switch>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
