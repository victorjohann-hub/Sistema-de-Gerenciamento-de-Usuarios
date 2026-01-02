import request from 'supertest';
import app from '../../app.js';

describe("Testes da API de Usuários", () => {

    it("Deve criar um usuário", async () => {
        const response = await request (app)
        .post("/user")
        .send({
            nome_usuario: "Teste",
            email_usuario: "teste@email.com",
            idade_usuario: 25,
            tipo_usuario: "admin",
            senha_usuario: "123456"
        });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty("id");
        expeect(response.body.nome_usuario).toBe("Teste");
    });


    it("Deve listar usuários", async () => {
    const response = await request(app)
      .get("/users");

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

});