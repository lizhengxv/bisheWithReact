import React,{Component} from 'react';
import {connect} from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import {initData} from '../../../actions/initHomeData'

import ListItem from '../../../components/ListItem';
import Loading from '../../../components/Loading'
import './localTourist.css';


class LocalTourist extends Component{
    constructor(props){
        super(props);
        this.state={
            pageNum:1,
            flag:false
        }
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }


    componentDidMount(){
        let {usercity} = this.props
        this.props.loadData(usercity);
    }

   
    shouldComponentUpdate(){
        if(!this.props.usercity){
            return false;    
        }
        return true;
    }

    componentWillReceiveProps(){
        let {data} = this.props.datas;
        // 没有数据的时候需要重新请求数据
        if(data == null){
            this.props.loadData(this.props.usercity);
        }else{
            return;
        }
        
        // console.log('this.props', this.props.usercity);
       
        // console.log('nextprops', nextProps.usercity)
    }

    render(){
        let {data,flag} = this.props.datas;
        return(
           <div className="local-tourist" >
               {
                 flag ? data.map( (item,index)=>{
                       return <ListItem  data={item} key={index} />
                   } ) : <Loading/>
               }
           </div>
        ) 
    }
}

const mapStateToProps = (state) =>{
   return{
        datas : state.inithomedata,
        userinfo : state.userinfo
   } 
}

const mapDispatchToPros = (dispatch)=>{
    return {
        loadData:(city)=>{
            dispatch( initData( city ) )
        }
    }
}

export default connect(mapStateToProps,mapDispatchToPros)(LocalTourist)