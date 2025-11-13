import bcrypt from 'bcrypt';

// ⚠️ Importar pool dentro das funções (lazy loading) para garantir que dotenv.config() foi executado antes
async function getPool() {
    const { default: pool } = await import('../../config/db.js');
    return pool;
}

export const criar = async (dados) => {
    const pool = await getPool();
    
    const { nome_usuario, idade_usuario, email_usuario, tipo_usuario , senha_usuario } = dados;

        if (!nome_usuario || !senha_usuario) {
            throw new Error('Campos obrigatórios ausentes');
        } 

        const senhaHash_usuario = await bcrypt.hash(senha_usuario, 10);

            const [result] = await pool.query(
                `INSERT INTO usuarios ( nome_usuario, idade_usuario, email_usuario, tipo_usuario , senha_usuario, data_criacao_usuario )
                VALUES (?, ?, ?, ?, ?, NOW())`,
                [ nome_usuario, idade_usuario, email_usuario, tipo_usuario , senhaHash_usuario ]
            );

            return { id: result.insertId, nome_usuario, email_usuario, tipo_usuario, idade_usuario };

        
    
}

export const listar = async () => {
    const pool = await getPool();
    const [rows] = await pool.query('SELECT * FROM usuarios');
    return rows;
}

