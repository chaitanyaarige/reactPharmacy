import React, { Component } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
// import './assets/scss/style.scss';
// import { useHistory } from "react-router-dom";
// import Login from './Login';
// import Dashboard from './Dashboard';
// import Settings from './Settings';

const loading = () => <p>Loading</p>;


// Pages
const HomePage = React.lazy(() => import('./components/HomePage'));
// const Login = React.lazy(() => import('./components/Login'));
// const Register = React.lazy(() => import('./components/Register'));
const Page404 = React.lazy(() => import('./components/Page404'));
// const Page500 = React.lazy(() => import('./components/Page500'));

class App extends Component {

  render() {
    return (
      <HashRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            {/* <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} /> */}
            {/* <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} /> */}
            <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
            <Route path="/" name="Home" render={props => <HomePage {...props}/>} />
          </Switch>
        </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
