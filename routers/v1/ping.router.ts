import express from "express";
import { pingHandler } from "../../controller/ping.controller";
import {validateRequestBody} from "../../validators";
import {pingSchema} from "../../validators/ping.validator"
import {  InternalServerErrror } from "../../utils";

const pingRouter=express.Router();

pingRouter.post("/",validateRequestBody(pingSchema),pingHandler)
pingRouter.get("/test",(req,res)=>{
    setTimeout(()=>{
        console.log("Helllo i am lazy");
        
    },1000)
    throw new InternalServerErrror("Somthing went wrong");
})
export default pingRouter;

