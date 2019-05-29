import React, {Component} from 'react';
import { Modal, Button, WingBlank, WhiteSpace } from 'antd-mobile';

const prompt = Modal.prompt;


class Search extends Component{
   
    render(){
        return(
            <WingBlank size="lg">
                <WhiteSpace size="lg" />
           

         

            <WhiteSpace size="lg" />
            <Button onClick={() => prompt(
            'Password',
            'Password Message',
            password => console.log(`password: ${password}`),
            'secure-text',
            )}
            >下单</Button>

          

         
            </WingBlank>
        )
    }


}

export default Search;