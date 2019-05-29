import React, {Component} from 'react';
import ItemC from './Item';
import Loading from '../../../components/Loading'

import $ from 'jquery';



const url = 'http://127.0.0.1:8080/zhoubian';
// const url ='http://192.168.1.187:8080/zhoubian';

class ListZB extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:[]
        }
    }

    componentDidMount(){
        let _this = this;
        $.ajax({
            type:'GET',
            url:url,
            // url:'http://127.0.0.1:8080/zhoubian',
            success:(res)=>{
               _this.setState({
                   data:res
               })
            }
        })
    }

    render(){

       let data = this.state.data

        return(
            <div>
                {
                    data.length > 0 ?  
                        data.map( (item,index)=>{
                                               return <ItemC data={item} key={index} ></ItemC>
                         })
                         : 
                         <Loading/>
                      
                }
            </div>
        )
    }
}

export default ListZB;