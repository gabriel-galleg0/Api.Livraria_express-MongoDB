import express  from "express";
import EditoraController from "../controllers/editoraController.js";

const router = express.Router();

router
    .get("/editoras", EditoraController.listarEditoras)
    .post("/editoras", EditoraController.cadastrarEditora)
    .put("/editoras/:id", EditoraController.atualizarEditora)
    .get("/editoras/:id", EditoraController.listarPorId)
    .delete("/editoras/:id", EditoraController.excluirEditora)
export default router;    