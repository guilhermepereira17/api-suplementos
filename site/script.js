const urlBase = 'http://localhost:3000/suplementos';
const lista = document.getElementById('lista-suplementos');
const filtro = document.getElementById('categoria');
const campoBusca = document.getElementById('busca');

async function carregarSuplementos() {
  const res = await fetch(urlBase);
  const suplementos = await res.json();
  mostrarSuplementos(suplementos);
}

async function buscarPorNome(nome) {
  const res = await fetch(`${urlBase}/buscar?nome=${encodeURIComponent(nome)}`);
  const resultados = await res.json();
  mostrarSuplementos(resultados);
}

function mostrarSuplementos(suplementos) {
  const categoriaSelecionada = filtro.value;
  lista.innerHTML = '';

  suplementos
    .filter(s => categoriaSelecionada === 'todas' || s.categoria === categoriaSelecionada)
    .forEach(s => {
      const item = document.createElement('li');
      item.innerHTML = `
        <strong>${s.nome}</strong>
        <span>${s.descricao}</span>
        <span>Categoria: ${s.categoria}</span>
        <span><strong>R$ ${s.preco.toFixed(2)}</strong></span>
      `;
      lista.appendChild(item);
    });
}

filtro.addEventListener('change', carregarSuplementos);

campoBusca.addEventListener('input', () => {
  const nome = campoBusca.value.trim();
  if (nome.length >= 2) {
    buscarPorNome(nome);
  } else {
    carregarSuplementos();
  }
});

carregarSuplementos();
