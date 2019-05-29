// 搜索主页



import React, {Component} from 'react';

import SearchHeader from '../../components/Header/SearchHeader';

import ItemList from './ItemList'
import './serach.css'


class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    componentDidMount(){
        // 通过路由获取输入的关键字
       

    }

    render(){
      
       let {params} =  this.props.match;
       let key =  this.props.match.params.type || '';
        return(
            <div className="search-main" >
                <SearchHeader args={params} />
                <ItemList keyword={key} ></ItemList>
            </div>
        )
    }
}



export default Search;