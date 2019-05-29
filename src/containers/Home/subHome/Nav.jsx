import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

class HomeNavigation extends Component{
    constructor(props){
        super(props);
        this.state = {
            navArr :[
                { title :'景点 · 门票', link:'home/menpiao' },
                { title :'小测试', link:'home/test' },
                { title :'旅游团购', link:'home/tuangou' }
            ],
            navArr2:[
                { title :'攻略 · 美食林', link:'home/delicious' },
                { title :'秘密花园', link:'home/mmhuayuan' },
                { title :'帮帮团', link:'home/bangtuan' }
            ]
        }
    }
    render() {
        return (
             <div className="navigation" >
                   <ul className="navigation-ul" >
                       {
                           this.state.navArr.map( (item)=>{
                               return <li className="navigation-li"  key={item.title} >
                                        <Link  to={'/'+item.link} >
                                            {item.title}
                                        </Link>
                                   </li>
                           })
                       }
                   </ul>
                   <ul className="navigation-ul nav-ul " >
                       {
                           this.state.navArr2.map( (item)=>{
                               return <li className="navigation-li" key={item.title} >
                                        <Link to={'/'+item.link}>
                                            {item.title}
                                        </Link>
                                   </li>
                           })
                       }
                   </ul>
             </div>
        );
    }
}

export default HomeNavigation;