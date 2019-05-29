import React, {Component} from 'react';
import {connect} from 'react-redux';

import HeaderCommon from '../../components/Header/HeaderCommon';
import CurrentCity from '../../components/CurrentCity';
import CityList from '../../components/CityList';
import localStore from '../../util/localStore';
import {CITY} from '../../const/';

import {updateUserInfo} from '../../actions/userinfo'

class City extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    // componentDidMount(){
    //     console.log('~~~~~~~~~~~~~~~~~~~~',this.props.userinfo);
    // }

    changeCity = (city)=>{
        if(!city){
            return;
        }
        // 派发action，更新store
        this.props.changeNewCity(city);
        // 存进本地
        localStore.setItem(CITY, city);
        this.props.history.push('/');
        
    }


    render(){
        return(
            <div className="city">
                <HeaderCommon title='选择城市'></HeaderCommon>
                <CurrentCity cityName={this.props.userinfo}></CurrentCity>
                <CityList changeCity={this.changeCity} ></CityList>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        userinfo : state.userinfo
    }
}

function mapDispatchToProps(dispatch){
    return{
        changeNewCity:(city)=>{
            dispatch( updateUserInfo(city) )
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(City);