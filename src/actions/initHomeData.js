import $ from 'jquery';


const url = 'https://dujia.qunar.com/golfz/destination/tejiaLeft?dep=';

const getHomeDataSuccess = (data)=>{
    return{
        type: "GET_HOME_DATA_SUCCESS",
        data,
        flag:true
    }
}

export function initData(city){
    return (dispatch)=>{
        $.ajax({
            type:'GET',
            url:url+city,
            dataType:'jsonp',
            success: ( res )=>{
                  dispatch( getHomeDataSuccess(res.data) )
            }
        })
    }
}