var app = require('express')()
var http = require('http').Server(app);
var io = require('socket.io')(http);
var serialize  = require('serialize-javascript')


app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
});
app.get('/libraries/p5.min.js',(req,res)=>{
    res.sendFile(__dirname+'/libraries/p5.min.js');
});
app.get('/p5_js.js',(req,res)=>{
    res.sendFile(__dirname+'/p5_js.js');
});

app.get('/client.bundle.js',(req,res)=>{
    res.sendFile(__dirname+'/client.bundle.js');
});

io.on('connection',function(socket){
    console.log(socket)

    socket.on('disconnect',function (data) {
        console.log(data);
    });
});

http.listen(3000,function(){

})
