import React ,{ Component } from 'react';
import ReactSwipe from 'react-swipe';
import { Link } from 'react-router-dom';

import './swiper.css';
import lunbotu1 from '../../static/images/lunbotu1.png';
import lunbotu2 from '../../static/images/lunbotu2.png';
import lunbotu3 from '../../static/images/lunbotu3.png';

class Swiper extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            index: 0,
            lunbos:[
                {id:1, url:lunbotu1},
                {id:2, url:lunbotu2},
                {id:3, url:lunbotu3}
            ],
            nav:[
                { title:'赏花踏青', linkurl:'home/test' },
                { title:'小众景点', linkurl:'home/tourist' },
                { title:'一日游', linkurl:'home/delicious' },
                { title:'一起旅游', linkurl:'home/trip' },
                { title:'义工旅行', linkurl:'home/volunteer' },
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
                <div className="home-nav-div">
                    <ul className="home-nav" >
                        { 
                            this.state.nav.map( (item,index)=>{
                                return <li className="home-nav-li" key={index}>
                                            <Link to={ '/'+item.linkurl }>  
                                                <div className="nav-bg-out" >
                                                    <div className="nav-bg"></div>
                                                </div>
                                                <p className="nav-title">{item.title}</p>
                                            </Link>
                                </li>
                            } )
                        }
                    </ul>
                </div> 
            </div>
        )
    }
}

export default Swiper;