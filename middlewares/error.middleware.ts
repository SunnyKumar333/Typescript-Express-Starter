import { Request,Response,NextFunction, response } from "express";
import {AppError} from "../utils";

export function genericErrorHandler(err:AppError,req:Request,res:Response,next:NextFunction){
    res.status(err.statusCode).json({
        success:false,
        message:err.message
    })
}