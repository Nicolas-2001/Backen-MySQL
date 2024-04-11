import Paciente from "../models/Paciente.js";

const getAllPacientes = async (req, res) => {
    try {
        const pacientes = await Paciente.findAll();
        res.send({
            pacientes,
        });
    } catch (error) {
        res.send({
            error,
        });
    }
};

const createPaciente = async (req, res) => {
    const {
        nombre,
        apellido,
        fecha_nacimiento,
        ciudad_de_nacimiento,
        telefono,
        correo_electronico,
        genero,
    } = req.body;
    try {
        const nuevoPaciente = Paciente.create({
            nombre,
            apellido,
            fecha_nacimiento,
            ciudad_de_nacimiento,
            telefono,
            correo_electronico,
            genero,
        });
        res.send({
            msg: "Paciente creado exitosamente",
        });
    } catch (error) {
        res.send({
            error,
        });
    }
};

const getPacienteById = async (req, res) => {
    try {
        // const cita = await Citas.findAll({ where: { id: req.params.id } });
        const paciente = await Paciente.findByPk(req.params.id);
        if (!paciente) {
            res.status(404).send({ error: "Paciente no encontrado" });
            return;
        }
        res.send({
            msg: "Paciente Encontrado",
            paciente,
        });
    } catch (error) {
        console.error("Error al obtener la Paciente:", error);
        res.status(500).send({ error: "Error al obtener la Paciente" });
    }
};

const updatePaciente = async (req, res) => {
    const {
        nombre,
        apellido,
        fecha_nacimiento,
        ciudad_de_nacimiento,
        telefono,
        correo_electronico,
        genero,
    } = req.body;
    try {
        const paciente = await Paciente.findByPk(req.params.id); // Busca el paciente por su ID
        if (!paciente) {
            res.status(404).send({
                msg: "El paciente no fue encontrado",
            });
            return;
        }
        await paciente.update({
            nombre,
            apellido,
            fecha_nacimiento,
            ciudad_de_nacimiento,
            telefono,
            correo_electronico,
            genero,
        }); // Actualiza los datos del paciente
        res.status(200).send({
            msg: "Paciente actualizado correctamente",
            paciente,
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send({
            msg: "Hubo un error al intentar actualizar el paciente",
            error: error.message,
        });
    }
};

const deletePaciente = async (req, res) => {
    try {
        const paciente = await Paciente.destroy({
            where: { id: req.params.id },
        });
        if (!paciente) {
            res.send({
                msg: "Error al eliminar cita",
            });
            return;
        }
        res.send({
            msg: "Paciente Eliminada Correctamente",
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send({ error });
    }
};

export default {
    getAllPacientes,
    createPaciente,
    getPacienteById,
    updatePaciente,
    deletePaciente,
};
