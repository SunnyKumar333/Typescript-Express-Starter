import express from "express";

const app=express();
const PORT=3000;
app.get("/ping",(request,response)=>{
    response.send("Pong")
});

app.listen(PORT,()=>{
    console.log(`Server is running on port:${PORT}`);
    console.log("Press Ctrl+C to stop server...");
      
})