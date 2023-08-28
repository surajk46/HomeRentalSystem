
var exp=require('express')
var mysql=require('mysql2')
var bp=require('body-parser')
var co=require('cors')

var app=exp();
app.use(co());
app.use(bp.json());
var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'homerentalsystem'
});

app.use(bp.urlencoded({extended: false }))
con.connect(function(err){
    if(!err)
        console.log("DB connected")
    else
        console.log("errr DB")
})

app.get('/egetallproperty',function(req,res){
    con.query('select * from property',function(err,data){
        if(!err)
            res.send(JSON.stringify(data));
    });
});

// app.post('/insert',function(req,res){
//     var no=req.body.EMPNO;
//     var name=req.body.ENAME;
//     var sal=req.body.SAL;
//     var query="insert into emp(empno,ename,sal) values(?,?,?)";
//     con.query(query,[no,name,sal],function(err){
//         if(!err)
//             res.send("insertion success")
//             else
//             res.send("insertion Unsuccess")
        
//     })
// });

app.listen(9000,function(){
    console.log("running on 9000")
})