import React, { Component } from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';
import Home from './containers/Home';
import IndexHome from './containers/IndexHome';
import Login from './containers/Login';
import Register from './containers/Register';
import Admin from './containers/Admin';
import Users from './containers/User'

class App extends Component {
  render() {
    return (
      <HashRouter>
           <div className="App">

              <Switch>
                      <Route path="/users" component={Users} ></Route>    
                      <Route path="/home" component={Home} ></Route>
                      <Route path="/indexHome" component={IndexHome} ></Route>
                      <Route path="/login" component={Login} ></Route>
                      <Route path="/register" component={Register} ></Route>
                      <Route path="/admin" component={Admin} ></Route> 
                     
                      {/* <Route path="/user" component={User} ></Route> */}

                      <Redirect from="/" to="/home" ></Redirect>
                
              </Switch>
          </div>
      </HashRouter>
     
    );
  }
}

export default App;
