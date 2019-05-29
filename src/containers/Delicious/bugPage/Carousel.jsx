import React, {Component} from 'react';

import { Tabs, WhiteSpace,Accordion,Card} from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';

import FoodS from './data/shanxi'

import { descKaoya1,descKaoya2,descKaoya3,
    descLudagun1, descLudagun2,Imgludagun1,Imgludagun2,Imgkaoya1,Imgkaoya2
} from './data/beijing'

import { Arrfen, Arrzhou, ImgZhou, ImgFen } from './data/xianggang'

const tabs = [
    { title: '陕西美食篇' },
    { title: '北京美食篇' },
    { title: '香港美食篇' },
  ];




function renderTabBar(props) {
  return (<Sticky>
    {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
  </Sticky>);
}



class DeliciousCarousel extends Component{
    
    constructor(props){
        super(props);
        this.state={
            shanxi:[],
            beijing:[],
            xinaggang:[]
        }
    }

    onChange = (key) => {
        console.log(key);
    }

   render(){
       return(
        <div className="meishi" >
            <WhiteSpace />
            <StickyContainer>
            <Tabs tabs={tabs}
                initalPage={'t2'}
                renderTabBar={renderTabBar}
            >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',  backgroundColor: '#fff' }}>
                    <div style={{ width:'100%'}}>
                        <Accordion  className="my-accordion" onChange={this.onChange} 
                            style={{  width:'100%' }}
                        >
                            {
                                FoodS.map( item =>(
                                    <Accordion.Panel header= {item.title} key={item.title} 
                                    style={{ borderBottom:'2px solid #ccc', width:'100%' }} >
                                        {
                                            item.type.map( val =>(
                                                <Card full  
                                                key={val.subtitle} 
                                                style={{ borderBottom:'2px solid #ccc',marginBottom:"10px" }}
                                                >
                                                    <Card.Header
                                                        title={val.subtitle}
                                                        thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                                                    />
                                                    <Card.Body>
                                                        <div>
                                                            <img src={val.img} alt=""/>
                                                            <p className='desc' > {val.subdesc} </p>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            ) )
                                        }
                                    </Accordion.Panel>
                                ))
                            }    
                            <WhiteSpace/>
                        </Accordion>

                 </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                    <div style={{ width:'100%'}}>
                        <Accordion
                            className="my-accordion" onChange={this.onChange}>
                            <Accordion.Panel header= '北京烤鸭' 
                            style={{ borderBottom:'2px solid #ccc',marginBottom:'10px', width:'100%' }}>  
                                <div  style={{ padding:'15px'}} >
                                    <img src={Imgkaoya1} alt=""/>
                                    <p className='desc'>
                                        {descKaoya1}
                                    </p>
                                    <img src={Imgkaoya2} alt=""/>
                                    <p className='desc'>
                                        {descKaoya2}
                                    </p>
                                    <p className='desc'>
                                        {descKaoya3}
                                    </p>
                                </div>      
                            </Accordion.Panel>
                            <Accordion.Panel header= '北京驴打滚' 
                            style={{ width:'100%' }} >   
                                <div  style={{padding:'15px'}} >
                                    <img src={Imgludagun1} alt=""/>
                                    <p className='desc' >
                                        {descLudagun1}   
                                    </p>
                                     <img src={Imgludagun2} alt=""  style={{ width:'100%' }}/>
                                    <p className='desc' >
                                        {descLudagun2}
                                    </p>
                                   
                                </div>  
                            </Accordion.Panel>                        
                        </Accordion>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                    <div style={{ width:'100%'}}>
                        <Accordion
                            className="my-accordion" onChange={this.onChange}>
                            
                            <Accordion.Panel header= '艇仔粥' 
                            style={{ borderBottom:'2px solid #ccc',marginBottom:'10px', width:'100%' }}>  
                                <div style={{padding:'15px'}} >
                                    <img src={ImgZhou[0]} alt=""/>
                                    <p className='desc'> { Arrzhou[0] } </p>
                                    <p className='desc'> {Arrzhou[1]} </p>
                                    <img src={ImgZhou[1]} alt=""/>
                                    <p className='desc'> { Arrzhou[2] } </p>
                                    <img src={ImgZhou[2]} alt='' ></img> 
                                    <p className='desc'> {Arrzhou[3]} </p>
                                </div>

                                
                            </Accordion.Panel>
                            
                            
                            <Accordion.Panel header= '肠粉' 
                                style={{ width:'100%' }} >   
                                <div style={{padding:'15px'}}>
                                    <img src={ImgFen[0]} alt=""/>
                                    <p className="desc">
                                        { Arrfen[0] }
                                    </p>
                                    <img src={ImgFen[1]} alt=""/>
                                    <p> {Arrfen[1]} </p>
                                    <img src={ImgFen[2]} alt=""/>
                                </div>
                                
                            </Accordion.Panel>                        
                        </Accordion>
                    </div>
                </div>
            </Tabs>
            </StickyContainer>
            <WhiteSpace />
      </div>
       )
   }
      
}

export default DeliciousCarousel;