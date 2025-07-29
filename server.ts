import express, { NextFunction,Request,Response } from "express";
import {serverConfig} from "./config";
import v1Router from "./routers/v1/index.router";
import middleware1 from "./middlewares/middleware1.middleware";
import middleware2 from "./middlewares/middleware2.middleware";

const app=express();
app.use("/api/v1",v1Router)
//load all environment variable


app.use(middleware1);
app.use(middleware2)


app.listen(serverConfig.PORT,()=>{
    console.log(`Server is running on port:${serverConfig.PORT}`);
    console.log("Press Ctrl+C to stop server....");
      
})