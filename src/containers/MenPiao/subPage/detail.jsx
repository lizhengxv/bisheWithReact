import React, {Component} from 'react';
import { WhiteSpace,Modal, Button, Accordion} from 'antd-mobile';
import HeaderCommon from '../../../components/Header/HeaderCommon';
import localStorage from '../../../util/localStore';

import { connect } from 'react-redux';

import './detai.css'

const prompt = Modal.prompt;

class TicketDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:[]
        }
    }

    initFn = ()=>{
        let arrData = [...this.props.data];    
        if(arrData.length > 0){
            let {id} = this.props.match.params;
            let arr2 = arrData.find( (item)=>{
                return item.name = id;
            });
            return arr2;
        }
        return [];
        // 刷新之后无数据哦
       
    }

    onChange = (key) => {
        console.log(key);
      }

    checkLogin = ()=>{
        let isLocal = localStorage.getItem('user');
        let {userphone} = this.props;

        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~',userphone)


        if(isLocal){
            return true;
        }else if(userphone){
            return true
        }else{
            return false;
        }
    }

   


    handleOrder = ( rmb )=>{
       
        let isLogin = this.checkLogin();
        if(isLogin){
            let _this = this;
            prompt(
                '请输入支付密码',
                `¥ ${rmb}`,
                password =>{
                if(!password){
                    return;
                }
                _this.props.history.push('/home/menpiao/result/'+rmb)
                },
                'secure-text',
            )
        }else{
            this.props.history.push(`/login/`)
        }
        
    }

    componentDidMount(){
        let data = this.initFn();  
        this.setState({
            data
        })

       this.checkLogin();
    }
    

    render(){
        let data = this.state.data;
        let {id} = this.props.match.params;
        return(
            data.length === 0 ? 
            <div>
                  <HeaderCommon title={id} />
                啥也没有... 
            </div>
            : 
           <div>
                    <HeaderCommon title={id} />
                    <WhiteSpace size="sm" />
                    <div className="menpiao-wrapper">
                        <div className="main" >
                            <div className="left">
                                <img src={data.imgURL} alt=""/>
                                {/* <div className="bookingTag">
                                    {data.bookingTag.label  }
                                </div> */}
                            </div>
                            <div className="right">
                                <h2 className="name" > {data.name} ( {data.level} ) </h2>
                                <div className="qunarPrice" >
                                    <p> <span className='rmb'>¥</span> 
                                        {data.qunarPrice} 
                                    </p>
                                    <p className="commentCount" >
                                        <span> {data.commentCount} </span> 条评论
                                    </p>
                                </div>
                                <p className="hybridAddress"> Ψ {data.hybridAddress} </p>
                                <p className="sightSimpleDesc" > {data.sightSimpleDesc} </p>
                            </div>
                        </div>

                        <div className="sub-main" >
                                <p className="addressDetail borderpx" > ◎ {data.addressDetail} </p>
                                <p className="openTime borderpx" > {data.openTime} </p>
                                <div className="tags" >
                                    {
                                        data.tagList.map( item =>(
                                            <p className="tag" key={item.label} >            
                                                {item.label}
                                            </p>
                                        ))
                                    }
                                </div>
                                
                                <Accordion accordion openAnimation={{}} className="my-accordion" onChange={this.onChange}>
                                    <Accordion.Panel header="推荐路线"  className="pad">
                                        <div className="trafficInfos">
                                        {
                                            data.trafficInfos.map( item =>(
                                                <div key={item.name}>
                                                    <p className="trafficInfos-name" > {item.name }</p>
                                                    <p className="trafficInfos-detail" > {item.detail} </p>
                                                </div>
                                            ))
                                        }
                                    
                                        </div>
                                    </Accordion.Panel>
                                </Accordion>
                               

                                <div className="ticket" >
                                    {
                                        data.priceList.map( item=>(
                                            <div className="ticketType borderpx" key={item.ticketTypeId} >
                                                <p className="ticketTypeName" >{item.ticketTypeName}</p>
                                                <div className="qunarPrice" >
                                                    <p>
                                                        <span className="rmb">¥ </span> {item.qunarPrice}
                                                    </p>
                                                    {/* <button className="order" onClick={ this.handleOrder.bind(this, item.qunarPrice ) } > 订 购 </button> */}
                                                    <Button className="order" 
                                                        onClick={ this.handleOrder.bind(this, item.qunarPrice ) }
                                                        >下单</Button>
                                               
                                                </div>
                                                {/* <a href={item.productDetailScheme}></a> */}
                                            </div>
                                        ) )
                                    }
                                </div>
                                {/* <a href={ this.changeUrl(data.scheme) }>订购----</a> */}
                        </div>           
                    </div>
                </div>
        )
    }
}

function mapStateToProps(state){
    return{
        data:state.getinfobykey,
        userinfo : state.userinfo,
        userphone:state.userphone,
    }
}


export default connect(mapStateToProps,null)(TicketDetail);