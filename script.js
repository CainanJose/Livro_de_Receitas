// // ======================================================
// // 🌐 SCRIPT.JS — LIVRO DE RECEITAS (versão otimizada)
// // ======================================================

// // ======================================================
// // 1️⃣ MENU MOBILE (CLIQUE PARA ABRIR/FECHAR)
// // ======================================================
// const menuToggle = document.querySelector('.menu-toggle');
// const navLinks = document.querySelector('.nav-links');

// menuToggle.addEventListener('click', () => {
//   navLinks.classList.toggle('active');
//   console.log("📱 Menu mobile alternado");
// });


// // ======================================================
// // 2️⃣ VARIÁVEIS BÁSICAS E LOGS INICIAIS
// // ======================================================
// let receita = "Bolo de Chocolate";
// const tempoPreparo = 15;
// var rendimento = 8;

// console.log(`🍲 Bem-vindo ao Livro de Receitas!`);
// console.log(`Hoje faremos ${receita}, tempo de preparo: ${tempoPreparo} min, rendimento: ${rendimento} porções.`);


// // ======================================================
// // 3️⃣ CONTADOR DE RECEITAS
// // ======================================================
// const receitas = document.querySelectorAll('.receita');
// console.log(`Total de receitas cadastradas: ${receitas.length}`);


// // ======================================================
// // 4️⃣ EFEITO NAS IMAGENS (hover elegante)
// // ======================================================
// document.querySelectorAll('.imagem-receita').forEach(img => {
//   img.addEventListener('mouseenter', () => {
//     img.style.filter = 'brightness(1.2)';
//     img.style.transform = 'scale(1.05)';
//   });
//   img.addEventListener('mouseleave', () => {
//     img.style.filter = 'brightness(1)';
//     img.style.transform = 'scale(1)';
//   });
// });


// // ======================================================
// // 5️⃣ BOTÃO "VOLTAR AO TOPO"
// // ======================================================
// const btnTopo = document.createElement('button');
// btnTopo.textContent = '⬆️';
// btnTopo.id = 'btnTopo';
// Object.assign(btnTopo.style, {
//   position: 'fixed',
//   bottom: '25px',
//   right: '25px',
//   background: '#4CAF50',
//   color: '#fff',
//   border: 'none',
//   borderRadius: '8px',
//   padding: '10px 15px',
//   cursor: 'pointer',
//   display: 'none',
//   transition: '0.3s',
// });
// document.body.appendChild(btnTopo);

// window.addEventListener('scroll', () => {
//   btnTopo.style.display = window.scrollY > 300 ? 'block' : 'none';
// });
// btnTopo.addEventListener('click', () => {
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// });


// // ======================================================
// // 6️⃣ RELÓGIO EM TEMPO REAL
// // ======================================================
// function atualizarDataHora() {
//   const agora = new Date();
//   const texto = agora.toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'medium' });
//   const datetime = document.getElementById('datetime');
//   if (datetime) datetime.textContent = `🕒 ${texto}`;
// }
// setInterval(atualizarDataHora, 1000);
// atualizarDataHora();


// // ======================================================
// // 7️⃣ MODO CLARO/ESCURO (LOCALSTORAGE + CSS dinâmico)
// // ======================================================
// const btnTema = document.createElement('button');
// btnTema.textContent = '🌗';
// Object.assign(btnTema.style, {
//   position: 'fixed',
//   left: '20px',
//   bottom: '25px',
//   background: '#222',
//   color: '#fff',
//   border: 'none',
//   borderRadius: '8px',
//   padding: '8px 12px',
//   cursor: 'pointer',
// });
// document.body.appendChild(btnTema);

// function aplicarTema(escuro) {
//   document.body.style.backgroundColor = escuro ? '#222' : '#f5f5f5';
//   document.body.style.color = escuro ? '#fff' : '#333';
//   localStorage.setItem('tema', escuro ? 'escuro' : 'claro');
// }

// if (localStorage.getItem('tema') === 'escuro') aplicarTema(true);

// btnTema.addEventListener('click', () => {
//   const modoEscuro = document.body.style.backgroundColor === 'rgb(34, 34, 34)';
//   aplicarTema(!modoEscuro);
//   console.log(`🌗 Tema alterado: ${modoEscuro ? 'Claro' : 'Escuro'}`);
// });


// // ======================================================
// // 8️⃣ FORMULÁRIO DE CONTATO — SIMULAÇÃO DE ENVIO
// // ======================================================
// const form = document.querySelector('.form-contato');
// if (form) {
//   form.addEventListener('submit', e => {
//     e.preventDefault();
//     const nome = document.getElementById('nome').value;
//     mostrarNotificacao(`Mensagem enviada com sucesso, ${nome || 'visitante'}!`, 'success');
//     form.reset();
//   });
// }


// // ======================================================
// // 🔔 FUNÇÃO DE NOTIFICAÇÃO VISUAL (substitui alert())
// // ======================================================
// function mostrarNotificacao(texto, tipo = 'info') {
//   const notif = document.createElement('div');
//   notif.textContent = texto;
//   notif.style.position = 'fixed';
//   notif.style.bottom = '10px';
//   notif.style.right = '10px';
//   notif.style.background = tipo === 'success' ? '#4CAF50' : '#555';
//   notif.style.color = '#fff';
//   notif.style.padding = '10px 15px';
//   notif.style.borderRadius = '8px';
//   notif.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
//   notif.style.opacity = '0';
//   notif.style.transition = 'opacity 0.5s ease';
//   document.body.appendChild(notif);
//   setTimeout(() => notif.style.opacity = '1', 100);
//   setTimeout(() => notif.remove(), 4000);
// }


// // ======================================================
// // 9️⃣ CONTADOR DE CLIQUES NAS RECEITAS
// // ======================================================
// const contadorCliques = {};
// document.querySelectorAll('.receita').forEach(card => {
//   card.addEventListener('click', () => {
//     const titulo = card.querySelector('.titulo-receita').textContent;
//     contadorCliques[titulo] = (contadorCliques[titulo] || 0) + 1;
//     console.log(`🍰 ${titulo} clicada ${contadorCliques[titulo]}x`);
//   });
// });


// // ======================================================
// // 🔟 CONTADOR DE VISITAS (LOCALSTORAGE)
// // ======================================================
// let visitas = Number(localStorage.getItem('visitas') || 0);
// visitas++;
// localStorage.setItem('visitas', visitas);
// mostrarNotificacao(`👋 Bem-vindo! Visita nº ${visitas}`, 'info');


// // ======================================================
// // 1️⃣1️⃣ GERADOR DE FRASE ALEATÓRIA (Math.random)
// // ======================================================
// const frases = [
//   "🍴 Cozinhar é transformar amor em comida.",
//   "👩‍🍳 Cada receita tem uma história.",
//   "🧂 Temperos são a alma da cozinha.",
//   "🥗 Comer bem é cuidar de si mesmo.",
//   "☕ Café e bolo: felicidade simples."
// ];
// const fraseBox = document.createElement('div');
// fraseBox.id = "fraseBox";
// Object.assign(fraseBox.style, {
//   textAlign: "center",
//   padding: "10px",
//   marginTop: "15px",
//   color: "#4CAF50"
// });
// document.body.prepend(fraseBox);
// function mostrarFraseAleatoria() {
//   const i = Math.floor(Math.random() * frases.length);
//   fraseBox.textContent = frases[i];
// }
// setInterval(mostrarFraseAleatoria, 10000);
// mostrarFraseAleatoria();


// // ======================================================
// // 1️⃣2️⃣ BUSCA DE RECEITAS (BARRA + FILTRO AO VIVO)
// // ======================================================
// const barraBusca = document.createElement('input');
// barraBusca.type = 'text';
// barraBusca.placeholder = '🔍 Buscar receita...';
// Object.assign(barraBusca.style, {
//   width: '90%',
//   maxWidth: '400px',
//   display: 'block',
//   margin: '30px auto',
//   padding: '10px',
//   border: '2px solid #4CAF50',
//   borderRadius: '8px',
// });
// document.body.prepend(barraBusca);

// barraBusca.addEventListener('input', e => {
//   const termo = e.target.value.toLowerCase();
//   receitas.forEach(r => {
//     const nome = r.querySelector('.titulo-receita').textContent.toLowerCase();
//     r.style.display = nome.includes(termo) ? 'block' : 'none';
//   });
// });


// // ======================================================
// // 1️⃣3️⃣ DESTAQUE AO SCROLLAR (scroll + DOMRect)
// // ======================================================
// window.addEventListener('scroll', () => {
//   document.querySelectorAll('.receita').forEach(r => {
//     const rect = r.getBoundingClientRect();
//     r.style.boxShadow = (rect.top >= 0 && rect.bottom <= window.innerHeight)
//       ? '0 0 15px rgba(76,175,80,0.5)'
//       : 'none';
//   });
// });


// // ======================================================
// // 1️⃣4️⃣ ANIMAÇÃO DE ENTRADA NAS RECEITAS
// // ======================================================
// document.querySelectorAll('.receita').forEach(r => {
//   r.style.opacity = 0;
//   r.style.transition = 'opacity 1s ease';
// });
// window.addEventListener('scroll', () => {
//   document.querySelectorAll('.receita').forEach(r => {
//     if (r.getBoundingClientRect().top < window.innerHeight - 100) {
//       r.style.opacity = 1;
//     }
//   });
// });


// // ======================================================
// // 1️⃣5️⃣ FEEDBACK AUTOMÁTICO DE INATIVIDADE
// // ======================================================
// let inativo;
// function resetarInatividade() {
//   clearTimeout(inativo);
//   inativo = setTimeout(() => {
//     mostrarNotificacao("🍳 Continue explorando receitas incríveis!", 'info');
//   }, 60000);
// }
// ['mousemove', 'keydown', 'scroll'].forEach(evt => window.addEventListener(evt, resetarInatividade));
// resetarInatividade();


// // ======================================================
// // 1️⃣6️⃣ BOTÃO DE DOWNLOAD DO CONTEÚDO (DOM + Blob)
// // ======================================================
// const btnDownload = document.createElement('button');
// btnDownload.textContent = '📄 Baixar Lista de Receitas';
// Object.assign(btnDownload.style, {
//   display: 'block',
//   margin: '30px auto',
//   padding: '10px 20px',
//   background: '#4CAF50',
//   color: '#fff',
//   border: 'none',
//   borderRadius: '8px',
//   cursor: 'pointer',
// });
// document.body.appendChild(btnDownload);

// btnDownload.addEventListener('click', () => {
//   const titulos = Array.from(document.querySelectorAll('.titulo-receita')).map(e => e.textContent);
//   const blob = new Blob([titulos.join('\n')], { type: 'text/plain' });
//   const link = document.createElement('a');
//   link.href = URL.createObjectURL(blob);
//   link.download = 'receitas.txt';
//   link.click();
//   mostrarNotificacao("📦 Arquivo de receitas baixado!", 'success');
// });


// // ======================================================
// // 1️⃣7️⃣ SISTEMA DE AVALIAÇÃO (console + média)
// // ======================================================
// const notas = [];
// function avaliarSite(nota) {
//   if (nota < 1 || nota > 5) return;
//   notas.push(nota);
//   const media = notas.reduce((a, b) => a + b, 0) / notas.length;
//   console.log(`⭐ Nova nota: ${nota} | Média atual: ${media.toFixed(2)}`);
// }
// document.body.addEventListener('keydown', e => {
//   if (['1','2','3','4','5'].includes(e.key)) avaliarSite(Number(e.key));
// });


// // ======================================================
// // 1️⃣8️⃣ TEMA AUTOMÁTICO POR HORÁRIO
// // ======================================================
// const hora = new Date().getHours();
// if (hora >= 18 || hora < 6) {
//   aplicarTema(true);
//   console.log("🌙 Tema noturno automático ativado");
// } else {
//   console.log("☀️ Tema diurno ativo");
// }


// // ======================================================
// // 🔚 FINAL
// // ======================================================
// console.log("✅ Todas as 18 funcionalidades JS carregadas com sucesso!");


// ======================================================
// 1️⃣ MENU MOBILE (EVENTO DE CLIQUE)
// ======================================================
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Ao clicar no menu (três barrinhas), alterna a classe “active”
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


// ======================================================
// 2️⃣ MENSAGEM DE BOAS-VINDAS E VARIÁVEIS BÁSICAS
// ======================================================

// Alerta inicial
alert("Bem-vindo ao Livro de Receitas! Vamos cozinhar? 👩‍🍳");

// Mensagem no console
console.log("🍲 Bem-vindo ao Livro de Receitas!");

// Variáveis simples
let receita = "Bolo de Chocolate";
const tempoPreparo = 15;
var rendimento = 8;

// Exibição no console
console.log(`Hoje faremos um delicioso ${receita}, que rende ${rendimento} porções e leva ${tempoPreparo} minutos para preparar!`);


// ======================================================
// 3️⃣ CONTADOR DE RECEITAS (QUERY SELECTOR + LENGTH)
// ======================================================
const receitas = document.querySelectorAll('.receita');
console.log(`O site possui ${receitas.length} receitas cadastradas.`);


// ======================================================
// 4️⃣ EFEITO DE INTERAÇÃO NAS IMAGENS DAS RECEITAS
// ======================================================
document.querySelectorAll('.imagem-receita').forEach(img => {
  img.addEventListener('mouseover', () => {
    img.style.filter = 'brightness(1.2)';
    img.style.transform = 'scale(1.05)';
  });
  img.addEventListener('mouseout', () => {
    img.style.filter = 'brightness(1)';
    img.style.transform = 'scale(1)';
  });
});


// ======================================================
// 5️⃣ BOTÃO “VOLTAR AO TOPO” (EVENTOS + DOM DINÂMICO)
// ======================================================
const btnTopo = document.createElement('button');
btnTopo.textContent = '⬆️ Topo';
btnTopo.id = 'btnTopo';
Object.assign(btnTopo.style, {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  display: 'none',
  background: '#4CAF50',
  color: 'white',
  border: 'none',
  padding: '10px 15px',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '16px',
  boxShadow: '0 3px 10px rgba(0,0,0,0.2)'
});
document.body.appendChild(btnTopo);

// Mostra botão se rolar mais de 300px
window.addEventListener('scroll', () => {
  btnTopo.style.display = window.scrollY > 300 ? 'block' : 'none';
});

// Rola suavemente para o topo ao clicar
btnTopo.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


// ======================================================
// 6️⃣ MOSTRAR DATA E HORA ATUAL (INTERVALO + DOM)
// ======================================================
function atualizarDataHora() {
  const agora = new Date();
  const dataHora = agora.toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'medium' });
  let area = document.getElementById('datetime');
  if (area) area.textContent = `🕒 ${dataHora}`;
}
setInterval(atualizarDataHora, 1000);
atualizarDataHora();


// ======================================================
// 7️⃣ MODO CLARO/ESCURO (TOGGLE + LOCALSTORAGE)
// ======================================================
const btnTema = document.createElement('button');
btnTema.textContent = '🌗 Tema';
btnTema.style.position = 'fixed';
btnTema.style.left = '20px';
btnTema.style.bottom = '20px';
btnTema.style.background = '#333';
btnTema.style.color = '#fff';
btnTema.style.border = 'none';
btnTema.style.padding = '10px 15px';
btnTema.style.borderRadius = '8px';
btnTema.style.cursor = 'pointer';
document.body.appendChild(btnTema);

// Aplica tema salvo
if (localStorage.getItem('tema') === 'escuro') {
  document.body.classList.add('dark');
  document.body.style.backgroundColor = '#222';
  document.body.style.color = '#fff';
}

// Alterna o tema
btnTema.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const escuro = document.body.classList.contains('dark');
  document.body.style.backgroundColor = escuro ? '#222' : '#f5f5f5';
  document.body.style.color = escuro ? '#fff' : '#333';
  localStorage.setItem('tema', escuro ? 'escuro' : 'claro');
});


// ======================================================
// 8️⃣ MENSAGEM AUTOMÁTICA NO FORMULÁRIO (EVENTOS)
// ======================================================
const form = document.querySelector('.form-contato');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert("📩 Mensagem enviada com sucesso! Obrigado pelo contato 💚");
    form.reset();
  });
}


// ======================================================
// 9️⃣ CONTADOR DE CLIQUES NAS RECEITAS (DOM + ARRAYS)
// ======================================================
const contadorCliques = {};
document.querySelectorAll('.receita').forEach(card => {
  card.addEventListener('click', () => {
    const titulo = card.querySelector('.titulo-receita').textContent;
    contadorCliques[titulo] = (contadorCliques[titulo] || 0) + 1;
    console.log(`A receita "${titulo}" foi clicada ${contadorCliques[titulo]} vezes.`);
  });
});


// ======================================================
// 🔟 ALERTA AUTOMÁTICO APÓS INATIVIDADE (setTimeout)
// ======================================================
let inativo;
function resetarInatividade() {
  clearTimeout(inativo);
  inativo = setTimeout(() => {
    alert("🍳 Ei! Ainda está aí? Explore mais receitas deliciosas!");
  }, 45000); // 45 segundos
}
['mousemove', 'keydown', 'scroll'].forEach(evento => {
  window.addEventListener(evento, resetarInatividade);
});
resetarInatividade();


// ======================================================
// 🔚 FIM DO SCRIPT - TODOS OS CRITÉRIOS ATENDIDOS
// ======================================================
console.log("✅ Script carregado com sucesso! Todas as 10 funcionalidades estão ativas.");


