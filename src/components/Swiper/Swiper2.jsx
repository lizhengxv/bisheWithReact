import React ,{ Component } from 'react';
import ReactSwipe from 'react-swipe';

import './swiper.css';
import lunbotu1 from '../../static/images/d1.jpg';
import lunbotu2 from '../../static/images/d2.jpg';
import lunbotu3 from '../../static/images/d3.jpg';

class Swiper extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            index: 0,
            lunbos:[
                {id:1, url:lunbotu1},
                {id:2, url:lunbotu2},
                {id:3, url:lunbotu3}
            ]
        }
    }
    render() {
        let opt = {
            auto: 2000,
            callback: function(index) {
              this.setState({index: Number(index)})
            }.bind(this)
          }

        return (
            <div id="home-category" className="home-all">
                <ReactSwipe
                 className="carousel"
                 swipeOptions={opt}
                >
                {
                    this.state.lunbos.map( (item)=>{
                       return <div className="home-category" key={item.id} >
                                <img className="home-category-img" src={item.url} alt=""/>
                       </div>
                    } )
                }
                </ReactSwipe>
            </div>
        )
    }
}

export default Swiper;