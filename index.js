const express=require('express')
const app=express()


app.use(express.static('public/'))


app.get('/',(req,res)=>{
    res.render('home.ejs')
})

app.get('/about',(req,res)=>{
    res.render('about.ejs')
})

app.get('/contact',(req,res)=>{

    const obj={
        name :"Aarti Patil",
        email : "aarti@123@gmail.com",
        phone : "9087653412"
    }
    const contact ={data:obj}
    res.render('contact.ejs',contact)
})

app.get('/project',(req,res)=>{
    res.render('project.ejs')
})

app.get('/My_Skill',(req,res)=>{

    const skills=["HTML","CSS","JavaScript","React","Node.js"]
    const result = {skill:skills}
    res.render('My_Skill.ejs',result)
})
app.use((req,res)=>{
    res.send("<h1>404 Page Not Found</h1>")
})

const PORT=3000
const HOST='127.0.0.1'

app.listen(PORT,HOST,()=>{
    console.log(`Server is running ... on http://${HOST}:${PORT}`)
})