import React, {Component} from 'react';

import './currentCity.css'

class CurrentCity extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render(){
        return(
            <div className="current-city">
                <h1> { this.props.cityName } </h1>
            </div>
        )
    }
}

export default CurrentCity;