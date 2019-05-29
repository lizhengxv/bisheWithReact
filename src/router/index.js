import React ,{Component} from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import App from '../containers';
import Home from '../containers/Home';
import City from '../containers/City';
import User from '../containers/User';
import Search from '../containers/Search';
import Detail from '../containers/Detail';
import NotFound from '../containers/404';

class RouterMap extends Component{
    render(){
        return(
            <Switch>
                {/* <Route path="/" component={App} > */}
                    {/* <IndexRoute component={Home}></IndexRoute> */}
                    <Route path="/home" component={Home} ></Route>
                    <Route path='/city' component={City}/>
                    <Route path='/user' component={User}/>
                    <Route path='/search/:type(/:keyword)' component={Search}/>
                    <Route path='/detail/:id' component={Detail}/>
                    <Route path='*' component={NotFound}/>
                    <Redirect from="/" to="/home" ></Redirect>
                {/* </Route> */}
            </Switch>
        )
    }
}

export default RouterMap;

