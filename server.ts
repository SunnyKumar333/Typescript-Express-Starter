import express, { NextFunction,Request,Response } from "express";
import {serverConfig} from "./config";
import v1Router from "./routers/v1/index.router";
import {genericErrorHandler} from "./middlewares/error.middleware"
import logger from "./config/logger.config";
import attachCorelationMiddleware from "./middlewares/corelation.middleware";
import sequelize from "./db/models/sequelize";
import {InternalServerErrror} from "./utils/index"

const app=express();
app.use(attachCorelationMiddleware);
app.use(express.json());
app.use("/api/v1",v1Router)
//load all environment variable


app.use(genericErrorHandler);


app.listen(serverConfig.PORT,async ()=>{
    logger.error(`Server is running on port:${serverConfig.PORT}`,{user:"sunny"});
    console.log("Press Ctrl+C to stop server....");
    try{
        // await sequelize.authenticate();
        console.log("DB connected successfully!");
        
    }
    catch(err){
        throw new InternalServerErrror("Database connection failed!!")
    }
      
})