import dotenv from 'dotenv';
import express from 'express';
import { editorController } from './controller/editorController.js';  // ✅ corregido

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/editora', editorController.getAll);
app.post('/editora', editorController.create);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
