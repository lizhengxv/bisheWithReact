import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class HeaderCommon extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    goBack = ()=>{
        if(this.props.backurl){
            this.props.history.push(this.props.backurl);
        }else{
            window.history.back()
        }
        
    }

    render(){
        return(
            <div className="header-common" >
                  <i className="icon-chevron-left" onClick={ this.goBack } ></i>
                <p className="header-title">  {this.props.title} </p>
            </div>
        )
    }
}

export default withRouter(HeaderCommon);