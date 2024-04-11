import express from "express";
import cors from "cors";
import conectarBD from "./config/db.js";
import rutasCitas from "./routes/rutasCitas.js";
import rutasPacientes from "./routes/rutasPacientes.js"

const app = express();
app.use(cors());
app.use(express.json());

(async () => {
    try {
        await conectarBD.authenticate();
        console.log("Conexión establecida correctamente.");
    } catch (error) {
        console.error("No se pudo conectar a la base de datos:", error);
    }
})();

app.use("/citas", rutasCitas);
app.use("/paciente", rutasPacientes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`El servidor está corriendo en http://localhost:${PORT}`);
});
