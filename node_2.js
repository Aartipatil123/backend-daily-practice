// Server Create

// used to create server
const http=require('http')

// import user defined module
const calci=require('./module')

const app=http.createServer((request,response)=>{

    // this method helps to write response
    // we call multiple times
    // inside data must be string
    response.write("Hello Welcome To Node JS Server.....")
    response.write("Hello Welcome To Node JS Server.....")

    response.write("Hello Welcome To Node JS Server....."+ calci.name)

    response.write("Addition Is "+ calci.Calci(10,20,"*"))



    // must be end
    response.end()



})

const PORT=3000
const HOST='127.0.0.1'

// you should pass port no compulsory to listen incoming requests
app.listen(PORT,HOST,()=>{
    // send user friendly msg
    console.log("Server is successfully running ..........")
})
