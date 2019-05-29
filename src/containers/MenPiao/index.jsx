import React ,{Component} from 'react';

import SearchHeader from '../../components/Header/SearchHeader';

import HeaderCommen from '../../components/Header/HeaderCommon'

import ItemList from '../Search/ItemList'

class Ticket extends Component{
    constructor(props){

        super(props);
        
        this.state={

        }
    }

    render(){
      
        let {params} =  this.props.match;
        let key =  this.props.match.params.type || '';
       
 
         return(
             <div className="search-main" >
                 <HeaderCommen title="景点门票" />
                 <SearchHeader args={params}  ticket={true}  />
                 <ItemList keyword={key} ticket={true} ></ItemList>
             </div>
         )
     }

}

export default Ticket;