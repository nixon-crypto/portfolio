import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const router = express.Router();
const prisma = new PrismaClient();

const app = express();
app.use(express.json());
app.use(cors());

router.get("/", async (req, res) => {
  try {
    let users = [];

    if (req.query) {
      users = await prisma.user.findMany({
        where: {
          name: req.query.name,
          age: req.query.age ? parseInt(req.query.age) : undefined,
          email: req.query.email,
        },
      });
    } else {
      users = await prisma.user.findMany();
    }
    res.status(200).json(users);
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    res.status(500).json({ message: "Erro ao buscar usuários" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, email, age } = req.body;
    if (!name || !email) {
      return res
        .status(422)
        .json({ message: "Email e nome são campos obrigatórios" });
    }
    
    const user = await prisma.user.create({
      data: {
        name,
        email,
        age: age ? parseInt(age) : undefined,
      },
    });
    res.status(201).json(user);
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    
    if (error.code === "P2002") {
      return res.status(409).json({ message: "Email já existe" });
    }
    res
      .status(500)
      .json({
        message: "Erro ao criar usuário",
      });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    await prisma.user.delete({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "Usuário deletado com sucesso!" });
  } catch (error) {
    res
      .status(422)
      .json({
        message: "Id invalido, erro ao deletar usuário",
        error: error.message,
      });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const user = await prisma.user.update({
      where: {
        id: req.params.id,
      },
      data: {
        email: req.body.email,
        name: req.body.name,
        age: req.body.age ? parseInt(req.body.age) : undefined,
      },
    });
    res.status(200).json(req.body);
  } catch (error) {
    res
      .status(422)
      .json({
        message: "Dados invalidos, erro ao atualizar usuário",
        error: error.message,
      });
  }
});

export default router;