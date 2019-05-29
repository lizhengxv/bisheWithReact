import $ from 'jquery';


// 本地
const url = 'http://127.0.0.1:8080';
// 手机端
// const url = 'http://192.168.2.157:8080';

const url2 = '/search/getinfobykey?key='

function changeUrl(key, pageNum){
    return `${url}${url2}${key}&pageNum=${pageNum}`
}




const getInfoByKeyWord = (data)=>{
    return{
        type: "GET_INFO_DBY_KEYWORD",
        data,
        flag:true
    }
}

let keyname = '';

export function getInfoByKey(keyword, pageNum){
    // 先正常加载10条数据也就是先执行else，滑动到底部才会执行if
    if(pageNum){
       let newurl =  changeUrl(keyname, pageNum);
       return (dispatch)=>{
           $.ajax({ 
               type:'GET',
               url:newurl,
               success:(res)=>{
                    dispatch( getInfoByKeyWord(res) )
               }
           })
       }
    }else{
        keyname = keyword;
        return (dispatch)=>{
            $.ajax({
                type:'GET',
                url:url+url2+keyword,
                success: ( res )=>{
                    dispatch( getInfoByKeyWord(res) )
                }
            })
        }
    }

    
}