import { NextFunction,Request,Response } from "express";
import { AnyZodObject} from "zod";
import logger from "../config/logger.config"
 export  function validateRequestBody(schema:AnyZodObject){
    return async (req:Request,res:Response,next:NextFunction)=>{
        try{
            logger.info("validating request body")
            await schema.parseAsync(req.body);
            next()
        }
        catch(error){
            console.log("Error occured");
            res.status(400).json({
                message:"Invalid Request Object",
                success:false,
                error: error
            })
        }
        logger.info("request validated")
    }
}



export function validateQuerryParam(schema:AnyZodObject){
    return async (req:Request,res:Response,next:NextFunction)=>{
        try{
            await schema.parseAsync(req.query);
            next()
        }
        catch(error){
            res.status(400).json({
                message:"Invalid Querry Object",
                success:false,
                error: error
            })
        }
    }
}