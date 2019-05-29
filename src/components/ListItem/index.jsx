import React from 'react';
import {Link} from 'react-router-dom';


//返回的数据里把 id 放在 url 这个属性， 需要获取id
function getIdBypath( path ){
    let arr = path.split('?');
    let str = arr[arr.length-1];
    let id = str.split('=')[1];
    return id;
}

function ListItem(props){
        let data = props.data;
        let title = data.title.toString().trim();
        let id = getIdBypath(data.url);

        return (
           <Link to={ '/detail/'+title+'/'+id }>
                <div className="paihangbang">
                    
                    <div className="list">
                        <div className="list-left">
                            <img  src={data.image} alt=""/>
                        </div>
                       
                        <div className="list-right">
                            <p className="sub-tittle" > {data.title} </p>
                            <p className="discont"> {data.discount} 折优惠 </p>
                            <p className="price" > <i className="rmb" >¥</i> { data.price } 起/人 </p>
                            <p  className="org-price"><i className="rmb" >¥</i> {data.orgPrice} /人 </p>
                        
                        </div>
                        
                        <div className="list-desc" >
                            <p className="desc" >  {data.fpStitle} </p>
                        </div>
                    </div>

                    <p className="panghangbang-desc" >
                        {data.desc}...
                    </p>
                </div>
                
           </Link>
        );

}

export default ListItem;