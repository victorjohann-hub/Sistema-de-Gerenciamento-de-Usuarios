import {listar, criar} from './userService.js';


export const criarUsuario = async (req, res) => {
    try {
        const usuario = await criar(req.body);
        res.status(201).json(usuario);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }

};

export const listarUsuarios = async (req, res) => {
    try{
        res.status(200).json(listar());
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

