import express from "express";
import pacienteController from "../controllers/pacienteController.js";

const router = express.Router();

router.get("/", pacienteController.getAllPacientes);
router.post("/", pacienteController.createPaciente);
router.get("/:id", pacienteController.getPacienteById);
router.put("/:id", pacienteController.updatePaciente);
router.delete("/:id", pacienteController.deletePaciente);

export default router;
