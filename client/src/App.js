import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import Footer from './components/Footer';
import Search from './pages/Search';
import Saved from './pages/Saved';
import Main from './pages/Main';

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Wrapper />
        <Route exact path="/" component={Main} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved" component={Saved} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
