const express = require('express');
const router = express.Router();

let suplementos = [
  { id: 1, nome: 'Whey Protein', descricao: 'Proteína concentrada para recuperação muscular', categoria: 'Proteína', preco: 120 },
  { id: 2, nome: 'Creatina Monohidratada', descricao: 'Aumenta força e desempenho físico', categoria: 'Desempenho', preco: 85 },
  { id: 3, nome: 'Ômega 3', descricao: 'Melhora a saúde cardiovascular e cerebral', categoria: 'Saúde Geral', preco: 49 },
  { id: 4, nome: 'BCAA', descricao: 'Aminoácidos essenciais para recuperação muscular', categoria: 'Proteína', preco: 65 },
  { id: 5, nome: 'Multivitamínico', descricao: 'Reforço nutricional com várias vitaminas', categoria: 'Saúde Geral', preco: 39 },
  { id: 6, nome: 'Pré-Treino', descricao: 'Aumenta energia e foco durante os treinos', categoria: 'Desempenho', preco: 70 },
  { id: 7, nome: 'Colágeno Hidrolisado', descricao: 'Fortalece unhas, pele e articulações', categoria: 'Saúde Geral', preco: 58 },
  { id: 8, nome: 'Caseína', descricao: 'Proteína de lenta absorção para uso noturno', categoria: 'Proteína', preco: 110 }
];

router.get('/', (req, res) => {
  res.json(suplementos);
});

// GET por nome (ex: /suplementos/buscar?nome=creatina)
router.get('/buscar', (req, res) => {
  const nome = req.query.nome?.toLowerCase();

  if (!nome) {
    return res.status(400).json({ erro: 'Parâmetro nome é obrigatório.' });
  }

  const resultados = suplementos.filter(s =>
    s.nome.toLowerCase().includes(nome)
  );

  res.json(resultados);
});

router.post('/', (req, res) => {
  const novo = req.body;
  suplementos.push(novo);
  res.status(201).json(novo);
});

router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const i = suplementos.findIndex(s => s.id === id);
  suplementos[i] = req.body;
  res.json(suplementos[i]);
});

router.delete('/:id', (req, res) => {
  suplementos = suplementos.filter(s => s.id !== parseInt(req.params.id));
  res.status(204).send();
});

module.exports = router;
