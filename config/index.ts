import dotenv from "dotenv";

type ServerConfig={
    PORT:number
}

function loadEnv(){
    dotenv.config();
}
loadEnv();
export const serverConfig:ServerConfig={
    PORT: Number(process.env.PORT)|| 3000
}

export const dbConfig={
    DB_USER:process.env.DB_USER,
    DB_PASSWORD:process.env.DB_PASSWORD,
    DB_NAME:process.env.DB_NAME,
    DB_HOST:process.env.DB_HOST
}
