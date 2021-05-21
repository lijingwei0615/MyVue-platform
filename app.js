// 定义全局变量
global.root = __dirname
// 依赖模块
var express = require('express')
var body_parse = require('body-parser')
var path = require('path')
var router = require('./routes/route.js')
var cookies_parser = require('cookie-parser')
// 初始化句柄
var http = require('http')
var app = express()
var ejs = require('ejs')
// 配置
var conf = require('./config/api')

// 设置监听端口
app.set('port',conf.node_port || 8090)
app.set('views',__dirname + "/views/page")

// 模版引擎 这里指定默认文件后缀，如果不是html需要指定具体后缀
app.set('view engine','ejs')

//加载环境变量
app.use(body_parse.urlencoded({ extended: false }));
app.use(cookies_parser());
app.use(express.static(path.join(__dirname,'/views')));

//启动及端口
http.createServer(app).listen(app.get('port'),function(){
    console.log('server started, listen port : ' + app.get('port'));
});

// 路由
router(app)

//加载错误处理解决办法
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

//导出app对象
module.exports = app;