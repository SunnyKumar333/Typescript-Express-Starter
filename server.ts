import express from "express";
import loadEnv from "./config";

const app=express();
//load all environment variable
loadEnv()
app.get("/ping",(request,response)=>{
    response.send("Pong")
});

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port:${process.env.PORT}`);
    console.log("Press Ctrl+C to stop server...");
      
})