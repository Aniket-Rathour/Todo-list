const express = require("express");
const app=express();
app.listen(3000);
app.use(express.json());

const cors = require("cors");
app.use(cors());

const {createTodo , updateTodo} = require("./types");
const {todo} = require("./db");

app.post("/todo",async function(req,res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({msg:"you have given wrong inbput"})
    }
    
    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:createPayload.completed
    })
    res.json({msg:"todo has been created"})
})

app.get("/todo",async function(req,res){
    const todos =  await todo.find({})
    res.json({todos})
})

app.put("/complete",async function(req,res){
    const createPayload = req.body;
    const parsedPayload = updateTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        return res.status(411).json({msg:"you have given wrong inbput"})
        
    }
    await todo.updateOne({
        _id:req.body.id
    },{
        completed:true
    })
    return res.json({msg:"work is est to completed"})
    
})
