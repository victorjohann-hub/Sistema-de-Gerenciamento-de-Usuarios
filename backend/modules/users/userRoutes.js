import express from 'express';
import {criarUsuario, listarUsuarios} from './userController.js'

const router = express.Router();

router.post('/user', criarUsuario);
router.get('/users', listarUsuarios);

export default router;