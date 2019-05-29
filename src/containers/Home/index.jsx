import React, {Component} from 'react';
import HomeHeader from '../../components/Header';
import {connect} from 'react-redux';
import Swiper from '../../components/Swiper';
import LocalTourist from './subHome/LocalTourist';
import HomeNav from './subHome/Nav'

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
 
    render(){
        // console.log('~~~',this.props.userinfo);
        let usercity = this.props.userinfo;
        let {history} = this.props
        return(
            <div>
               <HomeHeader usercity={usercity} history={history} />
               <Swiper></Swiper>
               <HomeNav></HomeNav>
               <h2 className="main-title" > 嘻游力荐 </h2>
               <LocalTourist usercity={usercity} ></LocalTourist>
               <span ref={ (ref)=>  this.loadMore = ref  } > 加载更多...  </span>
            </div>
        )
    }
}

const mapStateToProps = ( state )=>{
    return{
        userinfo : state.userinfo
    }
}

const mapDispatchToPros = (dispatch)=>{
    return {
      
    }
}


export default connect(mapStateToProps,mapDispatchToPros)(Home);