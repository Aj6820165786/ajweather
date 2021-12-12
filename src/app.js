const express=require('express');
const path=require('path');
const hbs=require('hbs');
const app=express();
const port= process.env.Port || 5000;

const spath=path.join(__dirname,"../public");
const temppath= path.join(__dirname,"../temp/views");
const ppath= path.join(__dirname,"../temp/partials");

app.set("view engine","hbs");
app.set("views",temppath);
app.use(express.static(spath));
hbs.registerPartials(ppath);

// routing
app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/about",(req,res)=>{
    res.render("about")
})
app.get("/weather",(req,res)=>{
    res.render("weather")
})
app.get("*",(req,res)=>{
    res.render("404")
})

app.listen(port,()=>{
    console.log(`listening to port at ${port}`);
})
