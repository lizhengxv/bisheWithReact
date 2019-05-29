import React, {Component} from 'react';
import { List, Radio, Button, WhiteSpace } from 'antd-mobile';

const RadioItem = Radio.RadioItem;


class SubTest extends Component{

    constructor(props){
        super(props);
        this.state = {
            value: 0,
            value2: 0,
            value3: 0,
            value4: 0,
            value5: 0,
            value6: 0,
            value7: 0,
            value8: 0,
          };
    }

  
      onChange = (value) => {
        console.log('checkbox');
        this.setState({
          value,
        });
      };
      onChange2 = (value) => {
        console.log('checkbox');
        this.setState({
          value2: value,
        });
      };

      onChange3 = (value) => {
        console.log('checkbox');
        this.setState({
          value3: value,
        });
      };

      onChange4 = (value) => {
        console.log('checkbox');
        this.setState({
          value4: value,
        });
      };

      onChange5 = (value) => {
        console.log('checkbox');
        this.setState({
          value5: value,
        });
      };

      onChange6 = (value) => {
        console.log('checkbox');
        this.setState({
          value6: value,
        });
      };

      onChange7 = (value) => {
        console.log('checkbox');
        this.setState({
          value7: value,
        });
      };

      onChange8 = (value) => {
        console.log('checkbox');
        this.setState({
          value8: value,
        });
      };

      handleResult = ()=>{
        const { value, value2, value3, value4,value5,value6,value7, value8 } = this.state;
        let res = value+value2+value3+value4+value5+value6+value7+value8;

        this.props.history.push('/home/test/result/'+res)
      
        //    8<= res <=24
        
        // if(res<8){

        // }


      }


      render() {
        const { value, value2, value3, value4,value5,value6,value7, value8 } = this.state;
        const data = [
          { value: 1, label: '经常' },
          { value: 2, label: '偶尔' },
          { value: 3, label: '很少' }
        ];
        const data2 = [
            { value: 1, label: '无压力，我是高富帅/白富美' },
            { value: 2, label: '好犹豫，要不下个月发了工资再买吧' },
            { value: 3, label: '算了最近手头有点紧，信用卡还没还' }
        ];

        const data3 = [
            { value: 1, label: '三十几岁事业才刚刚开始' },
            { value: 2, label: '我就说这么想的，正在为之努力中' },
            { value: 3, label: '是个美好的愿望，只不过等到五十岁再说' }
        ];
    
        const data4 = [
            { value: 1, label: '早就蹦过了，刺激' },
            { value: 2, label: '跃跃欲试' },
            { value: 3, label: '有点想，但心里有点害怕' }
        ];
    
        const data5 = [
            { value: 1, label: '程序猿' },
            { value: 2, label: '设计师' },
            { value: 3, label: '以上都不' }
        ];
        
        const data6 = [
            { value: 1, label: '我几乎是冲着他们去的' },
            { value: 2, label: '会去看看，虽然看不出个门道' },
            { value: 3, label: '不感兴趣，忽略..' }
        ];
    
        const data7 = [
            { value: 1, label: '繁华大都市' },
            { value: 2, label: '依山傍水小镇' },
            { value: 3, label: '雪山，海边或者深山里' }
        ];
        
        const data8 = [
            { value: 1, label: '酒店' },
            { value: 2, label: '青旅，民俗' },
            { value: 3, label: '自带帐篷露营' }
        ];

        return (<div>
          
          <List className="item-header" renderHeader={() => '1.你经常出去旅游吗？'}>
            {data.map(i => (
              <RadioItem key={i.value} checked={value === i.value} 
                        onChange={() => this.onChange(i.value)}
                        className="q-item"
                        >
                {i.label}
              </RadioItem>
            ))}
          </List>
          <WhiteSpace size="lg" className="border-b" />

          <List className="item-header" renderHeader={() => '2.逛街看到一个喜欢的东西，但价格相当可观，你会..'}>
            {data2.map(i => (
              <RadioItem key={i.value} checked={value2 === i.value}   className="q-item"
                        onChange={() => this.onChange2(i.value)}>
                {i.label}
              </RadioItem>
            ))}
          </List>
          <WhiteSpace size="lg" className="border-b" />


          <List className="item-header" renderHeader={() => '3.有人说三十岁就退休，找个闲适的地方养老。你的看法是...'}>
            {data3.map(i => (
              <RadioItem style={{fontSize:'12px'}} key={i.value} checked={value3 === i.value} 
                        onChange={() => this.onChange3(i.value)}>
                {i.label}
              </RadioItem>
            ))}
          </List>
          <WhiteSpace size="lg" className="border-b" />

          <List className="item-header" renderHeader={() => '4.你会尝试蹦极吗？'}>
            {data4.map(i => (
              <RadioItem style={{fontSize:'12px'}} key={i.value} checked={value4 === i.value} 
                        onChange={() => this.onChange4(i.value)}>
                {i.label}
              </RadioItem>
            ))}
          </List>
          <WhiteSpace size="lg" className="border-b" />

          <List className="item-header" renderHeader={() => '5.以下哪个职业更吸引你'}>
            {data5.map(i => (
              <RadioItem style={{fontSize:'12px'}} key={i.value} checked={value5 === i.value} 
                        onChange={() => this.onChange5(i.value)}>
                {i.label}
              </RadioItem>
            ))}
          </List>
          <WhiteSpace size="lg" className="border-b" />


          <List className="item-header" renderHeader={() => '6.去到一个地方，你会对那里的建筑感兴趣吗？'}>
            {data6.map(i => (
              <RadioItem style={{fontSize:'12px'}} key={i.value} checked={value6 === i.value} 
                        onChange={() => this.onChange6(i.value)}>
                {i.label}
              </RadioItem>
            ))}
          </List>
          <WhiteSpace size="lg" className="border-b" />

        
          <List className="item-header" renderHeader={() => '7.如果可以选择，你的理想居住地是...'}>
            {data7.map(i => (
              <RadioItem style={{fontSize:'12px'}} key={i.value} checked={value7 === i.value} 
                        onChange={() => this.onChange7(i.value)}>
                {i.label}
              </RadioItem>
            ))}
          </List>
          <WhiteSpace size="lg" className="border-b" />


          <List className="item-header" renderHeader={() => '8.去到旅游，你会更倾向于住那里？'}>
            {data8.map(i => (
              <RadioItem style={{fontSize:'12px'}} key={i.value} checked={value8 === i.value} 
                        onChange={() => this.onChange8(i.value)}>
                {i.label}
              </RadioItem>
            ))}
          </List>
          



          <Button type="primary" onClick={this.handleResult} >提交结果</Button>






         
        </div>);
      }
}

export default SubTest;