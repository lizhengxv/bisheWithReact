import React,{Component} from 'react'
import { Tabs, WhiteSpace } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';

import $ from 'jquery';

const url="http://127.0.0.1:8080";
const url2='/nicheview'

function renderTabBar(props) {
  return (<Sticky>
    {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
  </Sticky>);
}
const tabs = [
  { title: '西安' },
  { title: '上海' },
  { title: '南京' },
];

class TabExample extends Component{
    constructor(props){
        super(props)
        this.state={
            xian:[],
            shanghai:[],
            nanjing:[]
        }
    }

    componentDidMount(){
        $.ajax({
            url:url+url2,
            type:'GET',
            success:(res)=>{
                console.log(res)
            }
        })
    }

    handleClick = ()=>{
        console.log(this);
    }

    render(){
        return(
            <div>
                <WhiteSpace />
                <StickyContainer>
                <Tabs tabs={tabs}
                    initalPage={'t2'}
                    renderTabBar={renderTabBar}
                    onChange={ this.handleClick }
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '500px', backgroundColor: '#fff' }}>
                    Content of first tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '500px', backgroundColor: '#fff' }}>
                    Content of second tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '500px', backgroundColor: '#fff' }}>
                    Content of third tab
                    </div>
                </Tabs>
                </StickyContainer>
                <WhiteSpace />
            </div>
        )
    }
}
  


export default  TabExample

