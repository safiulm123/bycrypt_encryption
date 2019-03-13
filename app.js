const express = require('express');
const bcrypt = require('bcrypt')
const app = express();
const saltRounds = 10 ;

app.get('/api',(req,res)=>{
    res.send("Welcome to the API")
})

app.post('/api/login',(req,res)=>{
    const user = {
        id: 1,
        username: 'safiulm',
        email: 'safiulhasan@gmail.com'
    }
    const email = 'safiulhasan@gmail.com'
    bcrypt.genSalt(saltRounds,function(err,salt){
        if(err){
            res.send(salt);
        }else {
            bcrypt.hash(email, salt, function(err,hash){
              if(err){
                  res.send(salt);
              } else {
                res.send(hash);
              }
            })    
        }
        
    })
})

app.listen(5000,()=> console.log("Server listening to 5000"));