import React,{Component} from 'react';
import { ListView } from 'antd-mobile';
import { connect } from 'react-redux';

import ItemC from './Item';
import Loading from '../../components/Loading';

import {getInfoByKey} from '../../actions/getinfobykey'



// import $ from 'jquery';

// const url = 'http://127.0.0.1:8080';
// let url2 = '/search/getinfobykey'


class ItemList extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }

    componentDidMount(){
        // 当用户刷新页面时，没有按回车就不会请求数据，为了用户体验，当刷新后，如果没有数据，应该主动发送请求
        if(this.props.data.length < 1){
            this.props.loadData(this.props.keyword);
        }
       
    }

    render(){
       
        // 判断是不是 景点门票 栏目
        let ticket = this.props.ticket

        let data =  this.props.data
        return(
            <div>

                {
                data.length > 0 ?  
                data.map( item=>{
                         return  <ItemC key={item.id} data={item} ticket={ticket} />
                    } ) : <Loading/>
                }
               
            </div>
        )
    }

}

function mapStateToProps(state){
   return{
        data:state.getinfobykey
   }
}

function mapDispatchToProps(dispatch){
    return{
        loadData:(key)=>{
           dispatch(getInfoByKey(key))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemList)