import React from 'react'

import { ListView } from 'antd-mobile';
import {connect} from 'react-redux';

import {getInfoByKey} from '../../actions/getinfobykey'


class Demo extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
        // 相当于key
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      dataSource,
      isLoading: true,
      arr:[1,2,3,4,5],
      pageNum:10
    };
  }

  componentDidMount() {
    // you can scroll to the specified position
    // setTimeout(() => this.lv.scrollTo(0, 120), 800);
    // simulate initial Ajax
    // setTimeout(() => {
    
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.state.arr),
        isLoading: false,
      });
    // }, 600);
  }

  // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.dataSource !== this.props.dataSource) {
  //     this.setState({
  //       dataSource: this.state.dataSource.cloneWithRows(nextProps.dataSource),
  //     });
  //   }
  // }

  onEndReached = (event) => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    let {pageNum} = this.state; 

    if(pageNum > 100){
        alert('没有更多数据了....');
    }

    this.props.loadDate('西安', pageNum);
    this.setState({
        isLoading: true,
        pageNum:  this.state.pageNum + 10
    })

    setTimeout(() => {
      // let arr2 = this.state.arr.concat([6,7,8,9,10])
      this.setState({
        arr:this.state.arr.concat([11,12,13,14,15]),
        // arr:[10,9,8,7,6,5,4,3,2,1],
        dataSource: this.state.dataSource.cloneWithRows( this.state.arr ),
        isLoading: false,
      }, ()=>{
          console.log('this.state.dataSource', this.state.dataSource)
      } );
    }, 1000);


  }

  render() {
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

    let index = this.state.arr.length - 1;
    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = this.state.arr.length - 1;
      }
      const obj = this.state.arr[index--];
      return (
        <div key={rowID} style={{ padding: '0 15px', height:'200px'}}>
            {obj} 
        </div>
      );
    };
    return (
      <ListView
        ref={el => this.lv = el}
        dataSource={this.state.dataSource}
        renderHeader={() => <span>header</span>}
        renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
          {this.state.isLoading ? 'Loading...' : 'Loaded'}
        </div>)}
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
    );
  }
}


function mapStateToProps(state){
    return{
        datas:state.getinfobykey
    }
}

function mapDispatchToProps(dispatch){
  return{
      loadDate : (city, pageNum)=>{
        dispatch( getInfoByKey(city, pageNum) )
      }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Demo)