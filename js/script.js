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
// ======================================================
// ✅ FUNÇÃO DE TOAST EMPILHÁVEL (sem sobreposição)
// ======================================================
function mostrarToast(msg, tempo = 3000) {
  // Cria contêiner global dos toasts, se ainda não existir
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    Object.assign(container.style, {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      display: 'flex',
      flexDirection: 'column-reverse', // novos toasts abaixo
      gap: '10px',
      zIndex: 1000,
    });
    document.body.appendChild(container);
  }

  // Cria o toast individual
  const toast = document.createElement('div');
  toast.textContent = msg;
  Object.assign(toast.style, {
    background: '#4CAF50',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
    opacity: 0,
    transition: 'opacity 0.4s ease, transform 0.4s ease',
    transform: 'translateY(20px)',
    pointerEvents: 'none',
  });

  // Adiciona ao container
  container.appendChild(toast);

  // Anima entrada
  setTimeout(() => {
    toast.style.opacity = 1;
    toast.style.transform = 'translateY(0)';
  }, 50);

  // Remove com fade
  setTimeout(() => {
    toast.style.opacity = 0;
    toast.style.transform = 'translateY(20px)';
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
    const cat = r.dataset.categoria || 'outra'; // ✅ pega a categoria direto do HTML

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

// ======================================================
// 🌡️ MENSAGEM AUTOMÁTICA BASEADA NO HORÁRIO
// ======================================================
function mensagemHorario() {
  const hora = new Date().getHours();
  let msg;
  if (hora < 12) msg = "☀️ Bom dia! Hora de preparar o café!";
  else if (hora < 18) msg = "🍝 Boa tarde! Que tal uma nova receita?";
  else msg = "🌙 Boa noite! Experimente uma sobremesa!";
  mostrarToast(msg, 4000);
}
setTimeout(mensagemHorario, 5000);

// ======================================================
// 🧠 12️⃣ DICA ALEATÓRIA AO ABRIR O SITE
// ======================================================
const dicasRapidas = [
  "🍋 Um toque de limão realça o sabor dos pratos salgados!",
  "🥣 Misture ingredientes secos antes dos líquidos.",
  "🧈 Sempre unte formas com manteiga e farinha para não grudar.",
  "🔥 Pré-aqueça o forno para assar com temperatura ideal.",
  "🌿 Ervas frescas devem ser adicionadas no final da receita."
];
// ======================================================
// 🎲 BOTÃO "SORTEAR RECEITA" AO LADO DO FILTRO
// 🖼️ GALERIA: SELECIONAR IMAGEM (destacar borda ao clicar)
// ======================================================
window.addEventListener('DOMContentLoaded', () => {

  // --- 🎲 BOTÃO SORTEAR RECEITA ---
  const filtroContainer = document.querySelector('.filtro-container');
  if (filtroContainer) {
    const botaoSorteio = document.createElement('button');
    botaoSorteio.textContent = "🎲 Sortear Receita";
    botaoSorteio.id = "btnSorteioFiltro";
    Object.assign(botaoSorteio.style, {
      backgroundColor: '#ff9800',
      color: 'white',
      border: 'none',
      padding: '10px 18px',
      borderRadius: '6px',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: '0.3s',
      height: '40px',
      alignSelf: 'center',
    });

    botaoSorteio.addEventListener('mouseenter', () => {
      botaoSorteio.style.backgroundColor = '#ffa726';
      botaoSorteio.style.transform = 'scale(1.05)';
    });
    botaoSorteio.addEventListener('mouseleave', () => {
      botaoSorteio.style.backgroundColor = '#ff9800';
      botaoSorteio.style.transform = 'scale(1)';
    });

    filtroContainer.appendChild(botaoSorteio);

    botaoSorteio.addEventListener('click', () => {
      const nomes = [...document.querySelectorAll('.titulo-receita')].map(e => e.textContent);
      if (nomes.length === 0) {
        mostrarToast("😅 Nenhuma receita disponível para sortear!");
        return;
      }
      const sorteada = nomes[Math.floor(Math.random() * nomes.length)];
      mostrarToast(`🍽️ Que tal preparar: ${sorteada}?`);
    });
  }

  // --- 🖼️ GALERIA: SELEÇÃO DE IMAGEM ---
  const imagensGaleria = document.querySelectorAll('.grid-galeria img');
  if (imagensGaleria.length > 0) {
    imagensGaleria.forEach(img => {
      img.addEventListener('click', () => {
        img.classList.add('selecionada');
        const nome = img.alt || 'Imagem selecionada';
        mostrarToast(`📸 Selecionou: ${nome}`);
      });
    });
  }
});

