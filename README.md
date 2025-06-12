# 🧪 API Pública – Suplementação e Saúde

Este projeto é uma API pública desenvolvida como parte da atividade de Desenvolvimento de Sistemas.  
Ela simula uma loja de suplementos, permitindo acessar, cadastrar, editar e excluir suplementos.  
A API também está conectada a um site público que consome os dados em tempo real.

---

## 🔗 Links do Projeto

- 🔸 **API pública no Render:**  
  [https://api-suplementos.onrender.com/suplementos](https://api-suplementos.onrender.com/suplementos)

- 🔸 **Site público no GitHub Pages:**  
  [https://guilhermepereira17.github.io/site-suplementos](https://guilhermepereira17.github.io/site-suplementos)

---

## 🖥️ Funcionalidades do Site

- Listagem de suplementos
- Filtro por categoria (Proteína, Saúde Geral, Desempenho)
- Busca por nome (dinâmica)
- Visual simples e responsivo
- Integração direta com a API pública

---

## 📁 Endpoints da API

| Método | Rota                          | Descrição                            |
|--------|-------------------------------|----------------------------------------|
| GET    | `/suplementos`                | Lista todos os suplementos             |
| GET    | `/suplementos/buscar?nome=`   | Filtra suplementos por nome parcial   |
| POST   | `/suplementos`                | Adiciona um novo suplemento            |
| PUT    | `/suplementos/:id`            | Atualiza um suplemento existente       |
| DELETE | `/suplementos/:id`            | Remove um suplemento pelo ID           |

---

## ⚙️ Tecnologias Utilizadas

- Node.js
- Express
- CORS
- HTML, CSS e JavaScript (no site)
- Git e GitHub
- Render (deploy da API)
- GitHub Pages (deploy do site)

---

## 🙋 Autores

**Guilherme Pereira e Ana Laura Martins de Almeida**  
Projeto desenvolvido com fins didáticos para prática de criação, integração e publicação de APIs públicas.
