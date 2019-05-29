import React, {Component} from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import {connect} from 'react-redux';


import {updateUserInfo} from '../actions/userinfo';
import { CITY } from '../const';
import LocalStore from '../util/localStore';
// import App from '../containers';
import Home from './Home/';
import City from './City';
import User from './User';
import Search from './Search';
import Detail from './Detail';
import Login from './Login';


import NicheView from './NicheView';
import LittleTest from './LittleTest';
import Delicious from './Delicious';
import Trip from './Trip';
import Volunteer from'./Volunteer';

import Ticket from './MenPiao';
import TicketDetail from './MenPiao/subPage/detail';

import Zhoubian from './ZhouBian';
import ZhoubianDtail from './ZhouBian/subPage/detail';

import Result from '../components/Result';
import TestResult from '../containers/LittleTest/subPage/TestResult'

import C404 from './404'


// import NotFound from './404';

class HHHH extends Component{
    constructor(props){
        super(props);
        this.state = {
            initDone : false
        }
    }
    componentDidMount(){
        let city = LocalStore.getItem(CITY);
        if(!city){
            city = '北京'
        }
        this.props.getUserInfo(city);

    }

  
    render(){


        return(
            <div>
                <Switch>
                {/* <Route path="/" component={App} > */}
                    {/* <IndexRoute component={Home}></IndexRoute> */}
                    <Route path="/home/test/result/:res?" component={TestResult} />
                    <Route path="/home/test" component={LittleTest} />
                    <Route path="/home/tourist" component={NicheView} />

                    <Route path="/home/delicious" component={Delicious} />
                    <Route path="/home/meishilin" component={Delicious} />
                   
                    <Route path="/home/trip" component={Trip} />
                    <Route path="/home/volunteer" component={Volunteer} />

                    <Route path="/home/menpiao/result/:rmb?" component={Result} ></Route>
                    <Route path="/home/menpiao/:keyword?/:id" component={TicketDetail} ></Route>
                    <Route path="/home/menpiao" component={Ticket} ></Route>
                   
                    
                    <Route path="/home/tuangou/:id/:title?/:imgurl?" component={ZhoubianDtail} ></Route>
                    <Route path="/home/tuangou" component={Zhoubian} ></Route>
                    
                    <Route path="/home" component={Home} />

                   
                    <Route path='/city' component={City}/>

                    {/* <Route path='/login/:detail?/:id' component={Login}/> */}
                    <Route path='/login/:detail?/:id?' component={Login}/>
                  
                    
                    <Route path='/user' component={User}/>

                    <Route path='/search/:keyword/:type' component={Search}/>                    
                    <Route path='/search/:keyword' component={Search}/>
                    
                    <Route path='/search' component={Search}/>
                    
                    <Route path='/detail/:info/:id' component={Detail}/>
                    {/* <Route path='/detail/:info' component={Detail}/> */}

                    <Route path="/demo" component={C404} />
                    
                    <Redirect from="/" to="/home" ></Redirect>
                    {/* <Route path='*' component={NotFound}/> */}
                {/* </Route> */}
            </Switch>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return { 
        userinfo:state.userinfo
    }
}


const mapDispatchToProps = (dispatch) =>{
    return{
        getUserInfo:(data)=>{
            dispatch( updateUserInfo( data ) );
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(HHHH);