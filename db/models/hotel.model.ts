import {Model,InferAttributes,InferCreationAttributes,CreationOptional, Sequelize} from "sequelize"
import sequelize from "./sequelize";


class Hotel extends Model<InferAttributes<Hotel>,InferCreationAttributes<Hotel>>{
    declare id: CreationOptional<number>;
    declare name: string;
    declare location: string;
    declare address: string;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
    declare rating: CreationOptional<number>;
    declare ratingCount: CreationOptional<number>;
}

Hotel.init(
    {
        id:{
            type:"INTEGER",
            autoIncrement:true,
            primaryKey:true
        },
        name:{
            type: "STRING",
            allowNull:false
        },
        address:{
            type:"STRING",
            allowNull:false
        },
        location:{
            type:"STRING",
            allowNull:false
        },
        createdAt:{
            type:"DATE",
            allowNull:false
        },
        updatedAt:{
            type:"DATE",
            allowNull:false
        },
        rating:{
            type:"FLOAT",
            allowNull:true
        },
        ratingCount:{
            type:"INTEGER",
            allowNull:true
        }
    },
    {
        tableName:"hotels",
        sequelize:sequelize,
        underscored:true,
        timestamps:true
    }

);
export default Hotel;