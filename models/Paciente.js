import { Sequelize, DataTypes } from "sequelize";
import conectarBD from "../config/db.js";

const sequelize = conectarBD;
const Pacientes = sequelize.define(
    "Paciente",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fecha_nacimiento: {
            type: DataTypes.DATE,
        },
        ciudad_de_nacimiento:{
            type: DataTypes.STRING
        },
        telefono: {
            type: DataTypes.STRING,
        },
        correo_electronico: {
            type: DataTypes.STRING,
        },
        genero: {
            type: DataTypes.ENUM("Masculino", "Femenino", "Otro"),
        },
        fecha_registro: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
    },
    {
        tableName: "Pacientes",
        timestamps: false,
    }
);

export default Pacientes;
