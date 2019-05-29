import React, {Component} from 'react';
import List from './subPage/List'

import HeaderCommon from '../../components/Header/HeaderCommon';
import './zhoubian.css'

class Zhoubian extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render(){
        return(
            <div>
                <HeaderCommon title='旅游团购' />
                <List/>
            </div>
        )
    }
}

export default Zhoubian;