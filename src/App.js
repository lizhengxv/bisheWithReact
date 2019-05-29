import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import 'antd-mobile/dist/antd-mobile.css';
import ShouYe from './containers'




class App extends Component {

  render() {
    return (
      <div className="App">
          <ShouYe/>
      </div>
    );
  }
}





const mapStateToProps = (state, ownProps) => {
  return {
    inputValue: state.inputValue,
    list      : state.list
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeInputValue: (e) => {
      const action = {
        type : 'change_input-value',
        value: e.target.value
      };
      dispatch(action);
    },
    handleBtn:()=> {
      const action = {
        type: 'handle_btn'
      }
      dispatch(action);
    }
  }
}
export default  connect(mapStateToProps, mapDispatchToProps)(App);
