import db from "../../config/db";

class userModel {

    static async criar({ 
        nome_usuario, 
        email_usuario, 
        idade_usuario,
        tipo_usuario, 
        senha_usuario 
    }) {
        const query = `
        INSERT INTO usuarios (nome_usuario, email_usuario, idade_usuario, tipo_usuario senha_usuario)
        VALUES(?, ?, ?, ?, ?)
        `;

        const [result] = await db.execute(query, [nome_usuario, email_usuario, idade_usuario, tipo_usuario, senha_usuario]);
        return result.insertId;
    }
}

export default userModel;

