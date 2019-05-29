import React, {Component} from 'react';

import SearchInput from '../../components/SearchInput'

import './header.css'

class SearchHeader extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    goBack = ()=>{
        window.history.back()
    }

    render(){

        let ticket = this.props.ticket;
        // 景点门票的搜索栏样式变一变
        let className = ticket ? 'search-header ticket-search-header' : 'search-header';

        return(
           <div className={className} >
               <div >
                   {/* 门票的搜索栏不显示返回按钮，从父组件传过来的值 */}
                   {
                       ticket ? '' : <i className="icon-chevron-left" onClick={ this.goBack } ></i>
                   }
                    <div className="search-header-input" >
                        <SearchInput args={this.props.args }></SearchInput>
                    </div>
               </div>
           </div>
        )
    }
}

export default SearchHeader;