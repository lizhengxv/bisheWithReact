import React, {Component} from 'react';
import { Modal } from 'antd-mobile';

function closest(el, selector) {
    const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    while (el) {
      if (matchesSelector.call(el, selector)) {
        return el;
      }
      el = el.parentElement;
    }
    return null;
  }

class Trip extends Component{
    constructor(props) {
        super(props);
        this.state = {
          modal1: false,
          modal2: false,
        };
      }
      showModal = key => (e) => {
        e.preventDefault(); // 修复 Android 上点击穿透
        this.setState({
          [key]: true,
        });
      }
      onClose = key => () => {
        this.setState({
          [key]: false,
        });
      }
    
      onWrapTouchStart = (e) => {
        // fix touch to scroll background page on iOS
        if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
          return;
        }
        const pNode = closest(e.target, '.am-modal-content');
        if (!pNode) {
          e.preventDefault();
        }
      }
    
      render() {

        let imgurl = this.props.imgurl;
        let imgurl2 = this.props.imgurl;

        return (
            <div>
                <img  
                    className="suoluetu"
                    src={imgurl} 
                    onClick={this.showModal('modal1')} 
                    alt=""/>
          
            <Modal
              style={{ width:'100%', height:'60%' }}
              visible={this.state.modal1}
              transparent
              maskClosable={false}
              onClose={this.onClose('modal1')}
              closable={true}
              footer={[{ text: '关闭', onPress: () => {  this.onClose('modal1')(); } }]}
              wrapProps={{ onTouchStart: this.onWrapTouchStart }}
            //   afterClose={() => { alert('afterClose'); }}
            >
                    <img style={{ width:'100%' }}
                        src={imgurl2} alt=""/>
            </Modal>
            </div>
        );
      }
}

export default Trip;