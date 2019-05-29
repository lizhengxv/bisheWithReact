import React, {Component} from 'react';
import $ from 'jquery';


import HeaderCommon from '../../components/Header/HeaderCommon';
import DetailInfo from '../../components/DetailInfo'
import Swiper from '../../components/Swiper/Swiper2'

const urlBase = 'http://127.0.0.1:8080';
const url1 = urlBase+'/detail/getInfoById';
// 请求的接口没有图片返回，又需要图片展示，



class Detail extends Component{
    constructor(props){
        super(props);
        this.state = {
             data :[ {
                "ret":true,
                "msg":null,
                "data":{"recentOrders":["p***2用户购买2人出游"],
                "soldCountDesc":"历史成交",
                "satisfaction":1,
                //满意度
                "satisfactionPercentage":100,
                // 评论数
                "totalRatings":27,
                //总分
                "overviewScore":5,
                "statDisplay":null,
                "shopProductRateMap":null,
                // 销售分数
                "postSaleScore":5,
                // 销售等级
                "postSaleScoreLevel":4,
                "showPostSaleScoreLevel":"4",
                "compPostSaleScoreLevel":4,
                // 服务分数
                "servicesScore":4.2,
                // 服务等级
                "servicesScoreLevel":36,
                // 信用
                "credit":159,
                "level":5,
                "starName":"新手卖家",
                "starType":"heart",
                "icoNum":5,
                "showStar":true,
                "newSupplier":false,
                "soldCount":0,
                // 历史成交
                "soldCountHistory":33},
                "errcode":null
            }],
            flag:false
        }
    }

    componentDidMount(){
        let id = this.props.match.params.id;
        let _this = this;
        $.ajax({
            type:'GET',
            url:url1+'?id='+id,
            success:function( res ){
                let arr = [];
                arr.push(res);
               _this.setState({
                    data:arr
               })
            }
        })
    }

    componentWillMount(){
        this.setState=()=>{
            return;
        }
    }

    render(){

        // 从路由获取参数id和标题
        let {info,id} = this.props.match.params;
        // 判断有无数据
        let flag = this.state.data.length > 0 ? true : false;  
        let history = this.props.history;
        return(
            <div className="detai-home" >
                <HeaderCommon title='商户详情' />
                <Swiper/>
                {
                    flag ? <DetailInfo 
                                info={info} 
                                id={id} 
                                history={history}
                                data={this.state.data} /> 
                    :
                    <div>
                        疯狂加载中.........
                    </div> 
                }
            </div>
        )
    }
}

export default Detail;