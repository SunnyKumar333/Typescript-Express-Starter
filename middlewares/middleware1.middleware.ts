import { Request,Response,NextFunction } from "express";
export default function middleware1(req:Request,res:Response,next:NextFunction){
    console.log("middleware1");
     
    next()
    console.log("res->mid1");
     
    
}