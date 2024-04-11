import { Sequelize, DataTypes } from "sequelize";
import conectarBD from "../config/db.js";

const sequelize = conectarBD;

const Citas = sequelize.define(
    "Citas",
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre_medico: {
            type: DataTypes.STRING(255),
        },
        especialidad: {
            type: DataTypes.STRING(255),
        },
        fecha: {
            type: DataTypes.STRING(255),
        },
        duracion: {
            type: DataTypes.STRING(255),
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
            onUpdate: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
    },
    {
        tableName: "citas",
        timestamps: true,
    }
);

export default Citas;
