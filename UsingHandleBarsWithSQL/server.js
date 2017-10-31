const express=require('express'),
    app=express(),
    path=require('path'),
    bodyparser=require('body-parser'),
    routes={
        todo:require('./routes/todos').route
    };

app.use(bodyparser.json());
app.use(bodyparser.json({extended: true}));

app.set("view engine","hbs");
app.set("views",path.join(__dirname,'views'));

app.use('/add',routes.todo);

app.use((req,res)=>{
    res.redirect('/add');
});

app.listen(2222,()=>{
    console.log("Server started at http://localhost:2222/");
});