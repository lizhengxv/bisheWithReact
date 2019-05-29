import React,{Component} from 'react';
import { ListView } from 'antd-mobile';
import { connect } from 'react-redux';

import ItemC from './Item';
import Loading from '../../components/Loading';

import {getInfoByKey} from '../../actions/getinfobykey'

class ItemList extends Component{
    constructor(props){
        super(props);
        
        const dataSource = new ListView.DataSource({
            // 相当于key
          rowHasChanged: (row1, row2) => row1 !== row2,
        })

        this.state = {
            dataSource,
            isLoading: true,
            pageNum:10,
            hasMore:true
               // arr:[1,2,3,4,5],
        };
    
    }

    onEndReached = (event) => {
        console.log('淡定，哥已经执行了')
        let {pageNum} = this.state; 
        let {keyword} = this.props;
    
        if(pageNum > 50 ){
            this.setState({
                hasMore:false
            })
           
        }
    
        this.setState({
            isLoading: true,
            pageNum:  this.state.pageNum + 10
        },()=>{
            this.props.loadDate(keyword, this.state.pageNum);
        })
       
      }


    componentWillReceiveProps(nextProps) {
        if (nextProps.data !== this.props.data) {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(nextProps.data),
        });
        }
    }

    componentDidMount(){
        // 如果是从景点门票这个模块 进来的&& 无数据 ， 根据用户目前城市加载数据

        if(this.props.ticket ){
            this.props.loadDate( this.props.city )
        }
        if(this.props.rescity){
            this.props.loadDate( this.props.rescity )
        }

        console.log(this.props)

    }


    render(){
        // 分割线
        let {keyword} = this.props;

        const separator = (sectionID, rowID) => (
            <div
              key={`${sectionID}-${rowID}`}
              style={{
                backgroundColor: '#F5F5F9',
                height: 8,
                borderTop: '1px solid #ECECED',
                borderBottom: '1px solid #ECECED',
              }}
            />
          );
            
         
          const row = (rowData, sectionID, rowID) => {
                return (<ItemC 
                    key={rowID} data={rowData} ticket={ticket} 
                    keyword={keyword}
                    />);
          };
       
        // 判断是不是 景点门票 栏目
        let ticket = this.props.ticket

        return(
            <ListView
                ref={el => this.lv = el}
                dataSource={this.state.dataSource}
                renderFooter={() => (
                    this.state.hasMore ? 
                        <Loading/>
                         : 
                         <div style={{ height:'50px', lineHeight:'50px' }} > 我也是有底线的哟.... </div>
                    )        
                }
                renderRow={row}
                renderSeparator={separator}
                className="am-list"
                pageSize={4}
                useBodyScroll
                onScroll={() => { console.log('scroll'); }}
                scrollRenderAheadDistance={500}
                onEndReached={this.onEndReached}
                onEndReachedThreshold={10}
             />
        )
    }

}

function mapStateToProps(state){
   return{
        data:state.getinfobykey,
        city:state.userinfo
   }
}

function mapDispatchToProps(dispatch){
    return{
        loadDate : (city, pageNum)=>{
            dispatch( getInfoByKey(city, pageNum) )
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemList)