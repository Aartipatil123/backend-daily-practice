const express=require ('express')
const app = express()

app.use(express.static('public/'))

const menu =
`<ul>
   <li><a href='/'>Home</a></li>
   <li><a href='/about'>About Us</a></li>
   <li><a href='/contact'>Contact Us</a></li>
</ul>`
app.get('/',(req, res)=>{
    res.send(menu+`<h1>This is a HOMe Page</h1>
        <img src="download.jpg" alt="Laptop Wallpaper">`)
})

app.get('/about',(req, res)=>
{
    res.send(menu+"<h1>This is a About Us Page</h1>")
})

app.get('/contact',(req, res)=>{
    const obj={
        id : "1",
        name : "Aarti",
        email : "aarti@gmail.com",
        adress : "Pune"
    }
    // res.send(menu+`<h1>This is a ContactUs Page</h1>`)
       res.send(obj)
})


app.use((req, res)=>{
    res.send(`
        <h1>404- Page Not Found</h1>
        <a href='/'>Go To Home Page</a>
        `)
})

const PORT='3000'
const HOST='127.0.0.1'
app.listen(PORT, HOST, ()=>{
    console.log(`Server is Up......http://${HOST}:${PORT}`)
})