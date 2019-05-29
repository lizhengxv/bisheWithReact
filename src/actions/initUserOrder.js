import $ from 'jquery';


const url = 'http://127.0.0.1:8080';
// 手机端
// const url = 'http://192.168.1.187:8080';

const url2 = '/user/getuserinfobyphone?username='



const getOrderDataSuccess = (data)=>{

    return{
        type: "GET_ORDER_DATA_SUCCESS",
        data,
        flag:true
    }
}

export function initData(username){
    return (dispatch)=>{
        $.ajax({
            type:'GET',
            url:url+url2+username,
            success: ( res )=>{
                  dispatch( getOrderDataSuccess(res.data) )
            }
        })
    }
}