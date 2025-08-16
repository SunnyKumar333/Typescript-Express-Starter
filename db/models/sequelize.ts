import { Sequelize } from "sequelize"
import {dbConfig} from "../../config/index"
export default new Sequelize({
    dialect:"mysql",
    username:dbConfig.DB_USER,
    password:dbConfig.DB_PASSWORD,
    host:dbConfig.DB_HOST,
    database:dbConfig.DB_NAME,
    logging:true,

})