// ======================================================
// 🌐 LIVRO DE RECEITAS - SCRIPT PRINCIPAL
// ======================================================

// Função utilitária para logar com estilo
function log(msg) {
  console.log(`🍳 [Livro de Receitas] ${msg}`);
}

// ======================================================
// 1️⃣ MENU MOBILE (Toggle com animação suave)
// ======================================================
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('open');
  });
}

// ======================================================
// 2️⃣ TOAST DE BOAS-VINDAS (Substitui alert chato)
// ======================================================
function mostrarToast(msg, tempo = 3000) {
  const toast = document.createElement('div');
  toast.textContent = msg;
  Object.assign(toast.style, {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    background: '#4CAF50',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
    zIndex: 1000,
    opacity: 0,
    transition: 'opacity 0.5s ease'
  });
  document.body.appendChild(toast);
  setTimeout(() => (toast.style.opacity = 1), 50);
  setTimeout(() => {
    toast.style.opacity = 0;
    setTimeout(() => toast.remove(), 500);
  }, tempo);
}

// Mostra uma vez por sessão
if (!sessionStorage.getItem('toastMostrado')) {
  mostrarToast("👩‍🍳 Bem-vindo ao Livro de Receitas!");
  sessionStorage.setItem('toastMostrado', 'true');
}

// ======================================================
// 3️⃣ MOSTRAR DATA E HORA ATUAL (Atualiza por segundo)
// ======================================================
function atualizarDataHora() {
  const area = document.getElementById('datetime');
  if (!area) return;
  const agora = new Date();
  area.textContent = agora.toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'medium' });
}
setInterval(atualizarDataHora, 1000);
atualizarDataHora();

// ======================================================
// 4️⃣ BOTÃO “VOLTAR AO TOPO” (Scroll suave)
// ======================================================
(function criarBotaoTopo() {
  const btn = document.createElement('button');
  btn.id = 'btnTopo';
  btn.textContent = '⬆️';
  Object.assign(btn.style, {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    display: 'none',
    background: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer',
    fontSize: '18px',
    boxShadow: '0 3px 10px rgba(0,0,0,0.2)',
    zIndex: 999
  });
  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    btn.style.display = window.scrollY > 300 ? 'block' : 'none';
  });

  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();

// ======================================================
// 5️⃣ MODO CLARO/ESCURO (Com transição suave)
// ======================================================
(function modoEscuro() {
  const btn = document.createElement('button');
  btn.textContent = '🌗';
  Object.assign(btn.style, {
    position: 'fixed',
    left: '20px',
    bottom: '20px',
    background: '#333',
    color: 'white',
    border: 'none',
    padding: '10px',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    zIndex: 999
  });
  document.body.appendChild(btn);

  const aplicarTema = tema => {
    document.body.classList.toggle('dark', tema === 'escuro');
    document.body.style.backgroundColor = tema === 'escuro' ? '#222' : '#f5f5f5';
    document.body.style.color = tema === 'escuro' ? '#fff' : '#333';
  };

  const temaAtual = localStorage.getItem('tema') || 'claro';
  aplicarTema(temaAtual);

  btn.addEventListener('click', () => {
    const novoTema = document.body.classList.contains('dark') ? 'claro' : 'escuro';
    aplicarTema(novoTema);
    localStorage.setItem('tema', novoTema);
    mostrarToast(novoTema === 'escuro' ? "🌙 Modo escuro ativado" : "☀️ Modo claro ativado");
  });
})();

// ======================================================
// 6️⃣ ANIMAÇÃO DE ENTRADA DOS CARDS DE RECEITAS
// ======================================================
const receitas = document.querySelectorAll('.receita');
if (receitas.length > 0) {
  receitas.forEach((r, i) => {
    r.style.opacity = 0;
    r.style.transform = 'translateY(20px)';
    setTimeout(() => {
      r.style.transition = 'all 0.8s ease';
      r.style.opacity = 1;
      r.style.transform = 'translateY(0)';
    }, i * 200);
  });
}

// ======================================================
// 7️⃣ INTERAÇÃO NAS IMAGENS DAS RECEITAS
// ======================================================
document.querySelectorAll('.imagem-receita').forEach(img => {
  img.addEventListener('mouseenter', () => img.style.transform = 'scale(1.05)');
  img.addEventListener('mouseleave', () => img.style.transform = 'scale(1)');
});

// ======================================================
// 8️⃣ FILTRO DE RECEITAS (Busca + Categoria)
// ======================================================
const campoBusca = document.getElementById('buscaReceita');
const selectCategoria = document.getElementById('categoriaReceita');
const receitasLista = document.querySelectorAll('.receita');
const resultadoFiltro = document.getElementById('resultadoFiltro');

function filtrarReceitas() {
  if (!campoBusca || !selectCategoria) return;
  const texto = campoBusca.value.toLowerCase();
  const categoria = selectCategoria.value;
  let contador = 0;

  receitasLista.forEach(r => {
    const nome = r.querySelector('.titulo-receita').textContent.toLowerCase();
    const conteudo = r.textContent.toLowerCase();
    let cat = 'outra';
    if (nome.includes('bolo')) cat = 'bolo';
    else if (nome.includes('panqueca') || nome.includes('macarrão')) cat = 'massa';
    else if (nome.includes('salada')) cat = 'salada';
    else if (nome.includes('mousse') || nome.includes('panetone') || nome.includes('risoto')) cat = 'sobremesa';

    const match = conteudo.includes(texto) && (categoria === 'todas' || cat === categoria);
    r.style.display = match ? 'block' : 'none';
    if (match) contador++;
  });

  resultadoFiltro.textContent =
    contador === 0 ? "Nenhuma receita encontrada 😢" :
    contador === 1 ? "1 receita encontrada 🍽️" :
    `${contador} receitas encontradas 🍴`;
}

if (campoBusca && selectCategoria) {
  campoBusca.addEventListener('input', filtrarReceitas);
  selectCategoria.addEventListener('change', filtrarReceitas);
}

// ======================================================
// 9️⃣ FORMULÁRIO DE CONTATO (Validação + Toast)
// ======================================================
const form = document.querySelector('.form-contato');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    mostrarToast("📩 Mensagem enviada com sucesso!");
    form.reset();
  });
}

// ======================================================
// 🔟 FUNÇÃO ESPECIAL NAS OUTRAS PÁGINAS
// ======================================================

// 💡 Página Dicas → mostrar dica aleatória ao clicar
const listaDicas = document.querySelectorAll('#dicas li');
if (listaDicas.length > 0) {
  listaDicas.forEach(li => li.addEventListener('click', () => {
    mostrarToast(`✨ ${li.textContent}`);
  }));
}

// 📸 Página Galeria → zoom leve ao clicar
document.querySelectorAll('#galeria img').forEach(img => {
  img.addEventListener('click', () => {
    img.style.transition = 'transform 0.3s ease';
    img.style.transform = img.style.transform === 'scale(1.2)' ? 'scale(1)' : 'scale(1.2)';
  });
});

// 🎧 Página Galeria → alerta se áudio terminar
document.querySelectorAll('#galeria audio').forEach(aud => {
  aud.addEventListener('ended', () => mostrarToast("🎶 Áudio finalizado!"));
});

// ======================================================
// 💤 ALERTA APÓS INATIVIDADE (sem atrapalhar)
// ======================================================
let inativo;
function resetarInatividade() {
  clearTimeout(inativo);
  inativo = setTimeout(() => mostrarToast("⏰ Está aí? Explore mais receitas!"), 60000);
}
['mousemove', 'keydown', 'scroll', 'click'].forEach(evt => window.addEventListener(evt, resetarInatividade));
resetarInatividade();

// ======================================================
// ✅ FINALIZAÇÃO
// ======================================================
log("Script carregado. Todas as funcionalidades ativas!");
