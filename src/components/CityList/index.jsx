import React, {Component} from 'react';

import './cityList.css'

class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            citys:["北京","上海","深圳","杭州","广州",
                    "长沙","成都","重庆","大连","哈尔滨","济南","三亚",
                    "昆明","青岛","西安","沈阳","武汉","厦门","郑州",]
        }
    }

    handleClick = (city)=>{
        this.props.changeCity(city);
    }

    render(){
        return(
            <div className="city-list" >
                <ul>
                    {this.state.citys.map( (item)=>{
                        return <li key={item} onClick={this.handleClick.bind(this,item)}
                                    > <span> {item}</span>
                                </li>
                    } )}
                </ul>
            </div>
        )
    }
}

export default Search;