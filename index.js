const express = require('express');

const app = express();

app.use(express.json());

app.get('/usuarios', (req, res) => {
    res.json({ message: 'API está funcionando' });
});

app.listen(3000, () => console.log('Servidor está rodando na porta 3000'));
