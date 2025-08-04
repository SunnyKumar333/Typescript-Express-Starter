import { NextFunction,Request,Response } from "express";
import {v4 as uuidV4} from "uuid";
import { asyncLocalStorage } from "../utils/asyncstorage.utils";

export default function attachCorelationMiddleware
(req:Request,res:Response,next:NextFunction){
    const corelationId=uuidV4();
    asyncLocalStorage.run({corelationId},()=>{
        next();
    })
}