import { Sequelize } from "sequelize";


export const sequelize = new Sequelize("library", "root", "", {
  host: "localhost",
  dialect : "mysql"
})

export const connection = async () => {
  return await sequelize.sync({alter : false, force : false}).then(() => {
    console.log("Database connected")
  }).catch(error => {
    console.log(error)
  })
}
