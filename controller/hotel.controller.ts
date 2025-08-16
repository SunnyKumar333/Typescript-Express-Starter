import { NextFunction, Request, Response } from "express";
import {getAllHotelService,createHotelService,findHotelByIdService} from "../services/hotel.service";
import { createHotelDTO } from "../dto/hotel.dto";

export async function getAllHotelHandler(req:Request,res:Response){
    //1. call hotel services
    const hotels=await getAllHotelService();

    //2. send response
    res.status(200).json({
        message:"hotels found successfully",
        data:hotels,
        success:true
    })

}

export async function createHotelHandler(req:Request,res:Response) {
    const hotelResponse=await createHotelService(req.body);
    res.status(201).json({
        message:"Hotel created successfully",
        data:hotelResponse,
        success:true
    })
}

export async function getHotelByIdHandler(req:Request,res:Response) {
    const hotel=await findHotelByIdService(Number(req.params.id));
    res.status(200).json({
        message:"found hotel",
        data:hotel,
        success:true
    });
}