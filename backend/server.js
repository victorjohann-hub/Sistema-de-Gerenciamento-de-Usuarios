import app from './app.js';
const port = process.env.PORT || 3000;


app.get('/', (req,res) => {
    res.send("Servidor aberto!");
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});