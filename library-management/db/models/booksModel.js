import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";


const Book = sequelize.define('Book', {
  title : {
    type : DataTypes.STRING,
    allowNull : false
  },
  author: {
    type : DataTypes.STRING,
    allowNull : false
  },
  genre: {
    type : DataTypes.STRING,
    allowNull : false
  },
  available : {
    type : DataTypes.BOOLEAN,
    defaultValue : true
  }
})


export default Book;
