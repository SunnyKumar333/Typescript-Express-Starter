import Hotel from "../db/models/hotel.model";
import logger from "../config/logger.config";
import { NotFoundError ,BadRequestError} from "../utils";
import {CreationAttributes} from "sequelize";
import { createHotelDTO } from "../dto/hotel.dto";




export async function findAll() {
    const hotels=await Hotel.findAll();
    if(!hotels){
        logger.info("No Hotel Found");
        throw new NotFoundError("No Hotels found!");
    }
    logger.info(`Hotel Found: ${hotels.length}`);
    return hotels;
}

export async function create(hotelData:createHotelDTO){
    console.log(hotelData);
    logger.info("creating hotel object")
    const record=await Hotel.create({
        name:hotelData.name,
        location:hotelData.location,
        address:hotelData.address
    });
    return record;
    
}

export async function findById(id:number) {
    logger.info(`fetching hotel id:${id}`)
    const hotel=await Hotel.findByPk(id);
    return hotel
}