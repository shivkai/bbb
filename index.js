const express = require('express');
const db = require('./config/db')
const cors = require('cors')

const app = express();


app.use(cors());
app.use(express.json())

// Route to get all posts
app.get("/api/get", (req,res)=>{
db.query("SELECT * FROM yoga", (err,result)=>{
    if(err) {
    console.log(err)
    } 
res.json({result});
}
    );   
});
app.get('/api/user',(req,res)=>{
    let val ;
    const {email,password} = req.body;
    db.query("SELECT * FROM yoga WHERE email = ? AND password = ?",[email,password],(err,result)=>{
        if(err){
            console.log(err);
        }
        res.status(200).json({result});
    })

})
app.post('/api/login',(req,res)=>{
    const {email,password} = req.body;
    let vl;
    db.query("SELECT * FROM yoga WHERE email = ? AND password = ?",[email,password],(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        res.status(200).json({result});
    })
})

app.post('/api/pay',(req,res)=>{
    const {email} = req.body;
    let vl;
    db.query("UPDATE yoga SET FEE=1 WHERE email = ?",[email],(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        res.status(200).json({result});
    })
})


app.post('/api/create', (req,res)=> {

   const {id,name,slot,age,email,password} = req.body;
   
    db.query(" INSERT INTO yoga ( ID,NAME,BATCH, FEE, AGE,EMAIL,PASSWORD) VALUES (?,?,?,?,?,?,?)",[id,name,slot,0,age,email,password], (err,result)=>{
       if(err) {
       console.log(err)
       } 
       console.log(result)
       res.status(200).json({msg:"Registered Successfully",success:true})
    });   })


app.listen(process.env.PORT||3002, ()=>{
    console.log(`Server is running`)
})