import express from "express";
import { createHotelHandler, getAllHotelHandler, getHotelByIdHandler } from "../../controller/hotel.controller";
const hotelRouter=express.Router();

hotelRouter.get("/",getAllHotelHandler);
hotelRouter.post("/",createHotelHandler);
hotelRouter.get("/:id",getHotelByIdHandler)


export default hotelRouter;
