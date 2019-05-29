var axios = require('axios');

var errobj = {
    status:-1,
    err:'请求失败...',
    data:[]
}

function changeUrl(pageNum, key){

}

exports.getInfoByKey = function(req, res){
   
    var pageNum = req.query.pageNum || 10;

    var key =encodeURI(req.query.key) || '';

    var url = `http://touch.piao.qunar.com/touch/list.json?cityName=%E8%A5%BF%E5%AE%89&region=%E8%A5%BF%E5%AE%89&isForeign=false&page=1&pageSize=${pageNum}&keyword=${key}`;
    console.log(url);
    axios.get(url,{
        header:"http://touch.piao.qunar.com",
        host:'touch.piao.qunar.com'
    }).then( (datas)=>{
        console.log('根据关键词查询 请求成功')
        var data = datas.data.data.sightList;
        res.json(data)
    },()=>{
        res.json(errobj)
    })
}




exports.fnZhoubian = function(req, res){
    var url = 'https://m.tuniu.com/travel/mapi/channel/getCmsProductAjax?moduleId=7947811&currentPage=1&pageSize=1';
    axios.get(url,{
        header:'https://m.tuniu.com',
        host:'m.tuniu.com'
    }).then( datas =>{
        res.json(datas.data.data.mItems)
    } ,()=>{
        res.json(errobj)
    })
}

exports.fnZhoubianInfo = function(req, res){
     var  id = req.query.id
     var url='https://m.tuniu.com/wap-detail/api/group/price?productId='+id+'&bookCity=200&departCity=200&backCity=200&_=1555942320835056044751097226733'
    //  var url = 'https://m.tuniu.com/mapi/tour/comment?productId='+id+'&page=1&selectedType=0&_=1555933840850067478379633661350';
     axios.get(url,{
        header:'https://m.tuniu.com',
        host:'m.tuniu.com'
     }).then( datas =>{
         res.json(datas.data.data)
     }, () =>{
         res.json(errobj)
     } )
}


exports.fnLookComment = function(req, res){

  

    var id = req.query.id
    var url ='https://m.tuniu.com/mapi/tour/comment?productId='+id+'&page=1&selectedType=0&_=1555933840850067478379633661350';
    axios.get(url,{
        header:'https://m.tuniu.com',
        host:'m.tuniu.com'
     }).then( datas =>{
         res.json(datas.data)
     }, () =>{
         res.json(errobj)
     } )

}