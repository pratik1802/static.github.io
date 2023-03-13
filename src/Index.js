const express=require('express');
const path = require('path');

const port=process.env.PORT||3000;

const app=express();


const staticpath=path.join(__dirname,'../Public');
app.use(express.static(staticpath))


app.get('/',(req,res)=>{
    res.send("hello mahesh from js")

})


app.get('/about',(req,res)=>{
    res.send("hello mahesh about page");

})

app.listen(port,()=>{
    console.log(`http://127.0.0.1:${port}`);
})