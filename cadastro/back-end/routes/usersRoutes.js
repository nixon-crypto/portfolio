import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const router = express.Router();
const prisma = new PrismaClient();

const app = express();
app.use(express.json());
app.use(cors());

router.get("/", async (req, res) => {
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
});

router.post("/", async (req, res) => {
  await prisma.user.create({
    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age ? parseInt(req.body.age) : undefined,
    },
  });
  res.status(201).json(req.body);
});

router.delete("/:id", async (req, res) => {
  await prisma.user.delete({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({ message: "Usuário deletado com sucesso!" });
});

router.put("/:id", async (req, res) => {
  await prisma.user.update({
    where: {
      id: req.params.id,
    },
    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age ? parseInt(req.body.age) : undefined,
    },
  });
  res.status(201).json(req.body);
});

export default router;