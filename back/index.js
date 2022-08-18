import express from "express";
import cors from "cors";
import mongoose from "mongoose";

// configuration

const app=express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/myappDb',{
    useNewUrlParser:true,
    useUnifiedTopology:true
},()=>{
    console.log("Database connected");
});

// schema of user

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})


const User=new mongoose.model("User",userSchema);


// Routes

// login
app.post("/login",(req,res)=>{
    const {name,email,password}=req.body

    User.findOne({email:email},(err,user)=>{
        if(user)
        {
            if(password === user.password)
            {
                res.send({message:"Login Successfully",user:user})
            }
            else{
                res.send({message:"password not matched"})
            }
        }
        else
        {
            res.send({message:"user not register"})
        }
    })

})

//register
app.post("/register",(req,res)=>{
    const {name,email,password}=req.body

    User.findOne({email:email},(err,user)=>{
        console.log(user);
        if(user)
        {
            res.send({message:"user already register"});
        }
        else
        {
            const user=new User({
                name,
                email,
                password
             })
             user.save(err=>{
                if(err)
                {
                    res.send(err);
                }
                else
                {
                    res.send({message:"Successfully register"});
                }
             })
        }
    })
})

app.listen(9002,()=>{
    console.log("BE started at port 9002");
})