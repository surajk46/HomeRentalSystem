
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

app.get('/getallowners',function(req,res){
    con.query('select * from owners',function(err,data){
        if(!err)
            res.send(JSON.stringify(data));
    });
});
app.get("/getownerbyid/:no", function(req, res) {
    const no = req.params.no;
    console.log(no);
    con.query("SELECT * FROM owners WHERE id=" + no, function(err, data) {
       if (!err) {
           res.send(JSON.stringify(data));
       }
    });
});
app.get('/getalltenants',function(req,res){
    con.query('select * from tenants',function(err,data){
        if(!err)
            res.send(JSON.stringify(data));
    });
});
app.get('/getallareas',function(req,res){
    con.query('select * from area',function(err,data){
        if(!err)
            res.send(JSON.stringify(data));
    });
});
app.get("/getareabycity/:no", function(req, res) {
    const no = req.params.no;
    console.log(no);
    con.query("SELECT * FROM area WHERE city_id=" + no, function(err, data) {
       if (!err) {
           res.send(JSON.stringify(data));
       }
    });
});
app.get("/getsubbyid/:id", function(req, res) {
    const id = req.params.id;
    console.log(id);
    con.query("SELECT * FROM subscription WHERE id=" + id, function(err, data) {
       if (!err) {
           res.send(JSON.stringify(data));
       }
    });
});


// app.post('/insert',function(req,res){

//     var email= req.body.email;
//     var password= req.body.password;
//     var fname= req.body.fname;
//     var lname= req.body.lname;       
//     var areaid= req.body.areaid;
//     var contact_no= req.body.contactno;
//     var address=req.body.address;
//     var query="insert into tenants(fname,lname,contact_no,address,area_id) values(?,?,?,?,?,?)";
//     con.query(query,[fname,lname,contact_no,address,areaid],function(err){
//         if(!err)
//             res.send("insertion success")
//             else
//             res.send("insertion Unsuccess")
        
//     })
// });

app.listen(9000,function(){
    console.log("running on 9000")
})