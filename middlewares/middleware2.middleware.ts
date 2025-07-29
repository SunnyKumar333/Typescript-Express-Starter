import {Request,Response,NextFunction} from "express";
export default function middleware2(req:Request,res:Response,next:NextFunction){
    console.log("middleware2");
    next()
    console.log("res->mid2");  
}