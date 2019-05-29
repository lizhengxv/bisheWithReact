import React, {Component} from 'react';


import HeaderCommon from '../../../components/Header/HeaderCommon';
import LoadingC from '../../../components/Loading';
import ItemList from '../../Search/ItemList';

const arr =[
    {id:1, city:'西安',desc:'西安，古称“长安”，是国务院公布的首批国家历史文化名城，有周、秦、汉、隋、唐等在内的13个朝代在此建都，是世界四大古都之一'},
    {id:2, city:'北京',desc:'北京，简称“京”，是中华人民共和国首都、直辖市、国家中心城市、超大城市，全国政治中心、文化中心、国际交往中心、科技创新中心，是世界著名古都和现代化国际城市'},
    {id:3, city:'上海',desc:'上海，简称“沪”，是中国共产党的诞生地，是中华人民共和国省级行政区、直辖市，国家历史文化名城，国际经济、金融、贸易、航运、科技创新中心。'},
    {id:4, city:'广州',desc:'广州，简称穗，别称羊城、花城，是广东省省会、副省级市、国家中心城市、超大城市、国际大都市、国际商贸中心、国际综合交通枢纽'},
    {id:5, city:'深圳',desc:'深圳，简称“深”，别称“鹏城”，是中国四大一线城市之一，广东省省辖市、计划单列市、副省级市、国家区域中心城市、超大城市'},
    {id:6, city:'杭州',desc:'杭州，简称“杭”，是浙江省省会、副省级市、杭州都市圈核心城市，国务院批复确定的浙江省省会和全省经济、文化、科教中心'},
]


class TestResult extends Component{
   
    constructor(props){
        super(props);
        this.state={
            loading:true,
            result:[]
        }
    }

    componentDidMount(){
        // 随机生成0-5
       let i =Math.floor(Math.random()*6);
       let result = arr[i];
       
       this.setState({
            result
       })
        
      setTimeout(() => {
          this.setState({
              loading:false
          })
      }, 2000);
     

      

        
    }


    render(){

        let {res} = this.props.match.params;
        let {loading, result} = this.state;


        return(
           <div>
               <HeaderCommon title='测试结果' />
               {
                   loading ? 
                    <div>         
                    <LoadingC/>
                    <p>正在计算中......</p>
                    </div>          
                   :
                    <div>
                        <div className="result-res" >
                            <p> 测试分数：{res} </p>   
                            <p> 推荐城市: {result.city} </p>
                            <p> 推荐理由：{result.desc} </p>
                        </div>
                        <ItemList rescity={result.city} />
                    </div>
               }
              
           </div>
        )
    }


}

export default TestResult;