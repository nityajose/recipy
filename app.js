const express=require("express")
const bodyparser=require("body-parser")
const mongoose=require("mongoose")
const cors=require("cors")

var receipe=express()

receipe.post("/",(req,res)=>{
    res.send("welcome to my recipe book")
})

receipe.get("/viewall",(req,res)=>{
    res.send("view reciepes")
})

receipe.post("/add",(req,res)=>{
    res.send("add your reciepe")
})

receipe.post("/search",(req,res)=>{
    res.send("search your reciepe")
})

receipe.post("/delete",(req,res)=>{
    res.send("delete page")
})
 
receipe.listen(3002)