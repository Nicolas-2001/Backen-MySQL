import express from "express";
import citasController from "../controllers/citaController.js";

const router = express.Router();

// Definir rutas para manejar las operaciones relacionadas con las citas
router.get("/", citasController.getAllCitas);
router.post("/", citasController.createCita);
router.get("/:id", citasController.getCitaById);
router.put("/:id", citasController.updateCita);
router.delete("/:id", citasController.deleteCita);

export default router;
