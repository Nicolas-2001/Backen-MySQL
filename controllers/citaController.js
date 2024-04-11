import Citas from "../models/Citas.js";

// Controlador para manejar las operaciones relacionadas con las citas
const getAllCitas = async (req, res) => {
    try {
        const citas = await Citas.findAll();
        res.send({
            msg: "Citas Obtenidas",
            citas,
        });
    } catch (error) {
        console.error("Error al obtener citas:", error);
        res.status(500).send({
            msg: "Error al obtener citas",
            error,
        });
    }
};

const createCita = async (req, res) => {
    const { nombre_medico, especialidad, fecha, duracion } = req.body;
    try {
        const nuevaCita = await Citas.create({
            nombre_medico,
            especialidad,
            fecha,
            duracion,
        });
        res.send({
            msg: "Cita Agregada",
            nuevaCita,
        });
    } catch (error) {
        console.error("Error al obtener citas:", error);
        res.status(500).send({
            msg: "Error al obtener citas",
            error,
        });
    }
};

const getCitaById = async (req, res) => {
    try {
        // const cita = await Citas.findAll({ where: { id: req.params.id } });
        const cita = await Citas.findByPk(req.params.id);
        if (!cita) {
            res.status(404).send({ error: "Cita no encontrada" });
            return;
        }
        res.send({
            msg: "Cita Encontrada",
            cita,
        });
    } catch (error) {
        console.error("Error al obtener la cita:", error);
        res.status(500).send({ error: "Error al obtener la cita" });
    }
};

const updateCita = async (req, res) => {
    const { nombre_medico, especialida, fecha, duracion } = req.body;
    try {
        // const cita = await Citas.findByPk(req.params.id);
        // if (!cita) {
        //     res.send({
        //         msg: "Error al modificar la cita ",
        //     });
        //     return;
        // }
        // await cita.update({ nombre_medico, especialida, fecha, duracion });
        // res.send({
        //     msg: "Cita Actualizada Correctamente",
        //     cita,
        // });
        const cita = await Citas.update(
            {
                nombre_medico,
                especialida,
                fecha,
                duracion,
            },
            {
                where: { id: req.params.id },
            }
        );
        if (!cita) {
            res.send({
                msg: "Error al modificar la cita ",
            });
            return;
        }
        res.send({
            msg: "Cita Actualizada Correctamente",
        });
    } catch {
        console.error("Error:", error);
        res.status(500).send({ error });
    }
};

const deleteCita = async (req, res) => {
    try {
        const cita = await Citas.destroy({ where: { id: req.params.id } });
        if (!cita) {
            res.send({
                msg: "Error al eliminar cita",
            });
            return;
        }
        res.send({
            msg: "Cita Eliminada Correctamente",
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send({ error });
    }
};

export default { getAllCitas, createCita, getCitaById, updateCita, deleteCita };
