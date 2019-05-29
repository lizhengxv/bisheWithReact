
var express = require("express");
var app = express();
var axios = require('axios');
var bodyParser = require('body-parser');
// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var router = require('./router/search/getinfobykey.js')

// 根据用户查订单的假数据
var data1 = require('./public/mock/getuserinfobyphone.json')


// 跨域
app.all("*",function(req,res,next){
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin","*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","content-type");
    //跨域允许的请求方式
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == 'options')
        res.send(200);  //让options尝试请求快速结束
    else
        next();
})


// 登录
app.post("/home/login", function(req, res){
    console.log(req.body)
})

app.get("/detail/getInfoById",function(req,res){
   var id = req.query.id
   id = parseInt(id);
    const url = 'https://zgcj1.package.qunar.com/user/detail/getStatistics.json?pId='+id;
    axios.get(url,{
        header:"https://zgcj1.package.qunar.com",
        host:'zgcj1.package.qunar.com'
    }).then( (datas)=>{
       var jsons = datas.data;
       console.log('/detail/getInfoById 请求成功');
       res.send(jsons)
    } )

});

app.get('/user/getuserinfobyphone',function(req, res){
    var username = req.query.name;
    res.json(data1)
})


// 搜索框， 根据关键词查数据
app.get('/search/getinfobykey', router.getInfoByKey);



// 周边游
app.get('/zhoubian', router.fnZhoubian)
// 周边游根据id查具体的某一个信息
app.get('/zhoubian/getinfobyid',router.fnZhoubianInfo);

app.get('/zhoubian/getcommentbyid',router.fnLookComment);



app.listen(8080,function(){
    console.log('the server is runing 8080')
});