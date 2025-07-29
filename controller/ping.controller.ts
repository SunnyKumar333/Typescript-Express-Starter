import {Request,Response} from "express";
export const pingHandler=(req:Request,res:Response):void=>{
    console.log("PingHandler");
    res.send("Pong");
}