import React, {Component} from 'react';
import { Icon, Button } from 'antd-mobile';


import HeaderCommon from '../../components/Header/HeaderCommon';
import SubTest from './subPage/index';
import ImgA from '../../static/images/timg.gif'

import './littletest.css'

class LittleTest extends Component{
    constructor(props){
        super(props);
        this.state = {
            flagA:false,
            flagB:true
        }
    }

    hanldeClick = ()=>{
        this.setState({
            flagB: !this.state.flagB
        })
    }

    hanldeClickA = ()=>{
        this.setState({
            flagA: !this.state.flagA,
            
        })
    }

    render(){

        let {flagA,flagB} = this.state

        return(
            <div className="little-test">
                <HeaderCommon title="小小测试" />
                {
                    flagB ?  
                        <div className="desc">
                            <Icon type='cross-circle' size="md"  className="close" onClick={this.hanldeClick} />
                            <div className="sub-desc" >
                            想来一场说走就走的旅行，却无处可去？？本测试基于大数据有趣的测试，
                            推送出符合您当下心意心情的行程，不局限景点，还有有趣的体验和美食，一整套的那种吃+行的方案
                            点击开始按钮试试吧~~
                            </div>
                            <div className="wrapper-img" >
                                <img src={ImgA} alt=""/>
                            </div>
                        </div>
                : ''
                }
              
                <Button type="ghost" 
                    onClick={this.hanldeClickA}
                    inline style={{ marginRight: '4px' }} 
                    className="am-button-borderfix">
                    开始答题
                </Button>
             

                {
                    flagA ? 
                    <div>
                        <SubTest history={this.props.history} />
                    </div>
                    : ''
                }
               
            </div>
        )
    }
}

export default LittleTest;