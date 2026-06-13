import express from "express";
import dotenv from "dotenv";
import mysql from "mysql2";


const db = mysql.createConnection({

    host:"localhost",

    user:"root",

    password:"YOUR_MYSQL_PASSWORD",

    database:"Login"

});


db.connect((err)=>{

    if(err){

        console.log("Database connection failed",err);

    }
    else{

        console.log("MySQL Connected");

    }

});


export default db;
dotenv.config();

const app = express();

app.use(express.json());


app.get("/", (req,res)=>{
    res.send("Backend is running");
});


app.listen(5000, ()=>{
    console.log("Server running on port 5000");
});