import dotenv from 'dotenv';
dotenv.config();

import app from './app.js';

const port = process.env.PORT || 3000;

async function testeDeConexao() {

    const { default: pool } = await import('./config/db.js');
    try {
        const [rows] = await pool.query('SELECT NOW() as agora');
        console.log('Conexão com o MySQL bem-sucedida! Hora atual:', rows[0].agora);
    } catch (err) {
        console.error('Falha ao conectar ao MySQL:', err.message);
    }
}

app.get('/', (req, res) => {
    res.send("Servidor aberto!");
});

app.listen(port, async () => {
    await testeDeConexao();
    console.log(`Servidor rodando na porta: ${port}`);
});
