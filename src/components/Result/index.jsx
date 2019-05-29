import React, {Component} from 'react';
import { Result } from 'antd-mobile';

import HeaderCommon from '../../components/Header/HeaderCommon';

const myImg = src => <img style={{width:'60px', height:'60px'}} src={src} className="spe am-icon am-icon-md" alt="" />;



class CResult extends Component{
    constructor(props){
        super(props);
        this.state={
            rmb:''
        }
    }
    componentDidMount(){
        let rmb = this.props.match.params.rmb;
        this.setState({
            rmb
        })
    }

    render(){
        return(
            <div>
                <HeaderCommon title="支付成功" />
                <Result
                    img={myImg('https://gw.alipayobjects.com/zos/rmsportal/pdFARIqkrKEGVVEwotFe.svg')}
                    title="支付成功"
                    message={<div> {this.state.rmb} 元 </div>}
                 />
            </div>
        )
    }

}

export default CResult;