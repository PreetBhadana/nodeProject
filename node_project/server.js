const express=require("express")
const app=express()
const bcrypt=require('bcrypt')

const users=[]

app.set('view-engine','ejs')
app.use(express.urlencoded({extended:false}))
app.get('/',(req,res)=>{
    res.render('index.ejs')
})

app.get('/login',(req,res)=>{
    res.render('login.ejs')
})

app.post('/login',(req,res)=>{

})

app.get('/registor',(req,res)=>{
    console.log(req)
    res.render('registor.ejs')
})

app.post('/registor', async(req,res)=>{
 try{
    const hashedPassword=await bcrypt.hash(req.body.password, 10)
    users.push({
        id:Data.now().toString(),
        email:req.body.email,
        psw:req.body.hashedpassword,
        psw_repete:req.body.hashedpassword
        })
    console.log(users)
    res.redirect('/login')   
 }catch{
    res.redirect('/registor')
 }
 console.log(users)
})

app.listen(3000)