import React,{Component} from 'react';
import {Link} from 'react-router-dom';

import SearchInput from '../../components/SearchInput'

import './header.css';



class HomeHeader extends Component{
    constructor(props){
        super(props);
        this.state = {
            keyword:''
        }
    }

    handleChange = (e)=>{
        this.setState({
            keyword: e.target.value
        })
    }

    hanleKeyUp = (e) =>{
        if(e.keyCode !== 13){
            return;
        }
        // this.props.history.push('/');
        this.props.history.push('/search/all/'+ this.state.keyword )
    }

    render(){
        let {usercity,history} = this.props; 
        return(
            <ul className="home-header" >
                <li className="home-header-item">
                    <Link to={'/city'} >
                        <span className="cityname" > { usercity } </span>
                        <i className="icon-angle-down"></i>
                    </Link>
                </li>
                <li className="home-header-item" >
                    <SearchInput history={history}  />
                </li>
                <li className="home-header-item" >
                    <Link to={'/login'} >
                        <i className="icon-user"></i>
                    </Link>
                </li>
            </ul>
        )
    }
}

// function HomeHeader2(props){
//     let usercity =  props.usercity;
    
//     return(
//         <ul className="home-header" >
//             <li className="home-header-item">
//                 <Link to={'/city'} >
//                     <span> { usercity } </span>
//                     <i className="icon-angle-down"></i>
//                 </Link>
//             </li>
//             <li className="home-header-item" >
//                 <i className="icon-search"></i>
//                 <input className="home-header-search" type="text" placeholder="北京到西安的机票" />
//             </li>
//             <li className="home-header-item" >
//                 <span>用户</span>
//                 &nbsp;
//                 <i className="icon-user"></i>
//             </li>
//         </ul>
//     )
// }

export default HomeHeader;