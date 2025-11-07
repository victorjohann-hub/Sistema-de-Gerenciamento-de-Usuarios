import bcrypt from 'bcrypt';
import db from '../../config/db.js'

export const criar = async (dados) => {
    
    const { nomeUser, senha } = dados;

        if (!nomeUser || !senha) {
            throw new Error('Campos obrigatórios ausentes');
        } 

        const senhaHash = await bcrypt.hash(senha, 10);

            const novoCadastro = {
                id: db.length + 1,
                nomeUser,
                senha: senhaHash,
            };

            db.push(novoCadastro);

            return novoCadastro;

        
    
}

export const listar = () => {
    return db;
}

