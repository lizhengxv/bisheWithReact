import React, {Component} from 'react';
import HeaderCommon from '../../components/Header/HeaderCommon';
import ItemList from './subPage'





// 小众景点

class NicheView extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render(){
        return(
            <div>
               <HeaderCommon title="小众景点" />
               <ItemList/>
            </div>
        )
    }
}

export default NicheView;