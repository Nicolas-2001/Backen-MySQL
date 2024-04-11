// https://sequelize.org/docs/v6/core-concepts/model-querying-basics/
import { Sequelize } from "sequelize";

const conectarBD = new Sequelize("database_citas", "root", "Nicolas-2001", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
});

export default conectarBD;
