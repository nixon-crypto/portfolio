import express from "express";
import usersRoutes from "./routes/usersRoutes.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/usuarios",usersRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});