import express from "express";
import cors from "cors";
import db from "./config/db.js";
const app = express();

app.use(cors());

app.use(express.json());
// LOGIN API

app.post("/login",(req,res)=>{

const {username,password,email,address}=req.body;

const sql =
"SELECT * FROM users WHERE username=? AND password=? AND email=? AND address=?";
db.query(
sql,
[username,password,email,address],
(err,result)=>{
if(err){

return res.json({
message:"Database error"
})
}

if(result.length>0){
res.json({
message:"Login successful"
})
}

else{
res.json({
message:"Invalid username or password"
})
}
});

});
app.listen(8000,()=>{

console.log("Server running on port 8000");

});