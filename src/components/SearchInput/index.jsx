
// 景点门票， 搜索框的业务逻辑

import React, {Component} from 'react';

import PureRenderMixin from 'react-addons-pure-render-mixin';

import {connect} from 'react-redux';

import { withRouter } from 'react-router-dom';
 
// 搜索框：根据关键词搜索
import {getInfoByKey} from '../../actions/getinfobykey';

import './searchInput.css'


class SearchInput extends Component{
    constructor(props){
        super(props);
        this.state={
            value:''
        }
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
  
    handleChange = (e)=>{
        this.setState({
            value:e.target.value
        })
    }

    // 按下回车之后，执行查询时间，并把结果存在state里
    handleKeyUp = (e)=>{
        if(e.keyCode === 13 && this.state.value){
            this.props.loadData( this.state.value );
        }

        if(e.keyCode === 13 && this.state.value && this.props.history){
            this.props.history.push('/search/all/'+this.state.value)
        }else{
            return
        }

    }

  
    componentDidMount(){
    
      let params = this.props.args;
      if(params){
        this.setState({
            value:params.type
        }, ()=>{

            if( this.props.data.length === 0 ){
                this.props.loadData(this.state.value)
            }

        } )
      }      

    // 默认是按回车发送请求获取数据
    //   当用户刷新时，应该不需要按回车就应该重新请求数据
    
   
    
    }

    componentWillUnmount = () => {
        this.setState = (state,callback)=>{
          return;
        };
    }

    render(){
        return(
            <div className='search-inpupt'>
                <div className="wrapper" >
                    <i className="icon-search"></i>
                    <input type="text"
                        placeholder="请输入关键字"
                        onChange={this.handleChange}            
                        onKeyUp={this.handleKeyUp}
                        value={ this.state.value || '' }
                     />
                </div>
            </div>
           
        )
    }
}

function maoStateToProps(state){
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
export default  withRouter(connect( maoStateToProps, mapDispatchToProps )(SearchInput));