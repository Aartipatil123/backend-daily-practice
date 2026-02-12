const express=require('express')
const app=express()

app.use(express.static('public/'))

app.get('/',(req, res)=>{
    res.render('Home.ejs')
})

app.get('/about',(req,res)=>{
    res.render('about.ejs')
})

app.get('/contact',(req, res)=>{

    const obj={
        "id" : 1,
        "name" : "Aarti",
        "Email" : "aarti@gmail.com"
    }
    const result = {data:obj}
     res.render('contact.ejs',result)
})

const PORT=3000
const HOST='127.0.0.1'

app.listen(PORT,HOST,()=>{
    console.log(`server is running.....http://${HOST}:${PORT}`)
})