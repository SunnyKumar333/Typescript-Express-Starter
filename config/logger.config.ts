import winston from "winston";
import { getCorelationId } from "../utils/asyncstorage.utils";

const logger=winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp({format:"DD-MM-YYYY HH:mm:ss"}),
        winston.format.json(),
        winston.format.printf(({level,timestamp,message,...data})=>{
            const output={
                timestamp,
                level,
                message,
                data,
                corelationId:getCorelationId()
            };
            return JSON.stringify(output);
        })
    ),
    transports:[
        new winston.transports.Console(),
        new winston.transports.File({filename:"logs/app.log"})
    ]

})

export default logger;