import React, { Suspense, useContext } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import Footer from './components/Footer';
// import Signup from './components/Signup';
import Search from './pages/Search';
import Saved from './pages/Saved';
import Main from './pages/Main';
import Login from './pages/Login';
import { AuthProvider, AuthContext } from "./context/AuthContext";
import AboutPage from './pages/AboutPage';

const AuthenticatedRoute = ({ children, ...rest }) => {
  const auth = useContext(AuthContext);
  return (
    <Route {...rest} render={() => (auth.isAuthenticated() ? <div>{children}</div> : <Redirect to="/" />)}></Route>
  );
};
const UnauthenticatedRoutes = () => (
  <>
    <Switch>
    <Route exact path="/">
        <Main />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      {/* <Route path="/login">
        <Login />
      </Route> */}
      <Route exact path="/search">
        <Search />
      </Route>
      <Route exact path="/saved">
        <Saved />
      </Route>
      <Route exact path="/about">
        <AboutPage />
      </Route>
    </Switch>
  </>
);
const AppRoutes = () => {
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <UnauthenticatedRoutes />
          <AuthenticatedRoute path="/saved">
            <Saved />
          </AuthenticatedRoute>
          <UnauthenticatedRoutes />
        </Switch>
      </Suspense>
    </>
  );
};
function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Wrapper />
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
