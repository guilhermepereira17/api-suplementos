const express = require('express');
const cors = require('cors');
const app = express();

const suplementosRoute = require('./routes/suplementos');

app.use(cors());
app.use(express.json());

app.use('/suplementos', suplementosRoute);

app.get('/', (req, res) => {
  res.send('API Pública de Suplementos Online!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
