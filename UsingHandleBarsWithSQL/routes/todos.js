const route=require('express').Router();
const todolist=require('../db/todotable');

route.get('/',(req,res)=>{
    todolist.getTodos((list)=>{
        res.render('index',{list});
    })
});

route.post('/add',(req,res)=>{
    todolist.addTodo(req.body.task,()=>{
        res.redirect('.');
    })
});

exports.route=route;