import React, {Component} from 'react';
import HeaderCommon from '../../components/Header/HeaderCommon';
import DC from './bugPage/Carousel';
import './delicious.css'


class Delicious extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render(){
        return(
            <div>
               <HeaderCommon title='美食的前世今生' />
               <DC/>   
            </div>
        )
    }
}

export default Delicious;