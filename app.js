import {user} from './server.js'
import bcrypt from 'bcrypt'
import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin:'http://localhost:5173',
    methods:['get','post'],
    credentials:true
}))


app.get('/',(req,res)=>{
    res.send('hello')
})

app.post('/signup',async(req,res)=>{
    const {username, password} = req.body
    try {
        const pass = await bcrypt.hash(password,10)
        const usr = await user.insertMany({username:username,password:pass})
        res.send(usr)
    } catch (error) {
        console.log("database error");
    }
    
})

// http://localhost:4000/signup

app.listen(4000,()=>{
    console.log('server connected');
})