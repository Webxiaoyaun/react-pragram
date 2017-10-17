let express = require('express');

//首页轮播图数据
let sliders = require('./mock/sliders');
//首页列表数据
let lessons = require('./mock/lessons');
let users = [];

let app = express();

app.use(function (req,res,next) {
    res.header('Access-Control-Allow-Origin', "http://localhost:8080");
    res.header('Access-Control-Allow-Headers', "Content-Type");
    res.header('Access-Control-Allow-Methods', "GET,POST,PUT,DELETE,OPTIONS");
    res.header('Access-Control-Allow-Credentials', "true");
    if (req.method == 'OPTIONS') {
        res.end('');
    } else {
        next();
    }
});

//获取轮播图数据接口
app.get('/sliders',function (req,res) {
   res.json(sliders)
});
//获取列表信息接口
app.get('/lessons',function (req,res) {
   res.send(lessons);
});
//获取登录信息接口
app.post('./login',function (req,res) {
    res.send('登录信息');
});
//获取注册信息接口
app.post('./register',function (req,res) {
    res.send('注册信息');
});

app.listen(3000,function () {
   console.log('监听3000端口')
});

