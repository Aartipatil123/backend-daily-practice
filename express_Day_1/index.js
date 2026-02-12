const express=require('express')
const app =express()

app.get('/',(req, res)=>{   
    res.send("<h1>Welcome to the Express.js</h1>")
})
const PORT = 3000
const HOST = '127.0.0.1'

app.listen(PORT, HOST,()=>{
    console.log(`server is up...http://${HOST}:${PORT}`)
})