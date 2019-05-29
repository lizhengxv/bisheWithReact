import React, {Component} from 'react';

import './listitem.css'

import ListItem from './ListItem'

class Comment extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render(){

        let {count,list,specSatisfactionList} = this.props.data
        return(
            <div className='user-comment' >
                <div className="c-title" > 
                    <p>游客评论</p>
                    <p> 共 {count} 条评论 </p> 
                </div>
                <ul  className='specSatisfactionList'>
                    {
                        specSatisfactionList.map( (item,index)=>{
                            return <li key={index}>
                               <span>  {item.specName} : {item.satisfaction} % </span>
                            </li>
                        } )
                    }
                </ul>
                <div className="user-satis" >
                    {
                        list.map( (item,index)=>{
                           return <ListItem data={item} key={index} ></ListItem>
                        })
                    }
                
                </div>
            </div>
        )
    }
}

export default Comment;