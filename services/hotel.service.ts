import { findAll,create ,findById} from "../reposatory/hotel.reposatory";
import { createHotelDTO } from "../dto/hotel.dto";

export async function getAllHotelService(){
    const hotels=await findAll();
    return hotels;
}

export async function createHotelService(hotelData:createHotelDTO) {
    const hotel=await create(hotelData);
    return hotel;
}

export async function findHotelByIdService(id:number) {
    const hotel=await findById(id);
    return hotel;
}