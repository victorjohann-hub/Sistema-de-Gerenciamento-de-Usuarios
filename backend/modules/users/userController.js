import {listar, criar} from './userService.js';
import User from './userModel.js';


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
        const usuarios = await listar();
        res.status(200).json(usuarios);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const deletarUsuario = async (req, res) => {
    try{
        const usuarioDeletado = await User.findandDeletebyID
    } catch{

    }
}
