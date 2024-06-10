import { Sequelize } from "sequelize";

const sequelize = new Sequelize("mydatabase", "root", "mypassword", {
  host: "107.174.40.12",
  port: 3306,
  dialect: "mysql",
});

export { sequelize };
