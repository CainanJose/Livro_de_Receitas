// ======================================================
// 1️⃣ MENU MOBILE (EVENTO DE CLIQUE)
// ======================================================
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// ======================================================
// 2️⃣ MENSAGEM DE BOAS-VINDAS E VARIÁVEIS BÁSICAS
// ======================================================

// Alerta de boas-vindas
alert("Bem-vindo ao Livro de Receitas! Vamos cozinhar? 👩‍🍳");

// Mensagem no console
console.log("🍲 Bem-vindo ao Livro de Receitas!");

// Declaração de variáveis
let receita = "Bolo de Chocolate";   // tipo string
const tempoPreparo = 15;             // tipo number
var rendimento = 8;                  // tipo number

// Exibição dos valores
console.log("Receita: " + receita);
console.log("Tempo de preparo: " + tempoPreparo + " minutos");
console.log("Rendimento: " + rendimento + " porções");

// Usando template string (forma moderna)
console.log(`Hoje faremos um delicioso ${receita}, que rende ${rendimento} porções e leva ${tempoPreparo} minutos para preparar!`);

// Mostrando tipos das variáveis
console.log(typeof receita);       // string
console.log(typeof tempoPreparo);  // number
console.log(typeof rendimento);    // number

// ======================================================
// 3️⃣ CONTADOR DE RECEITAS (QUERY SELECTOR)
// ======================================================
const receitas = document.querySelectorAll('.receita');
console.log(`O site possui ${receitas.length} receitas cadastradas.`);

// ======================================================
// 4️⃣ EFEITO DE INTERAÇÃO NAS IMAGENS DAS RECEITAS
// ======================================================
document.querySelectorAll('.imagem-receita').forEach(img => {
  img.addEventListener('mouseover', () => {
    img.style.filter = 'brightness(1.2)'; // Clareia
  });
  img.addEventListener('mouseout', () => {
    img.style.filter = 'brightness(1)'; // Volta ao normal
  });
});

// ======================================================
// 5️⃣ BOTÃO “VOLTAR AO TOPO” (INTERATIVIDADE + EVENTOS)
// ======================================================

// Criação dinâmica do botão
const btnTopo = document.createElement('button');
btnTopo.textContent = '⬆️ Topo';
btnTopo.id = 'btnTopo';
btnTopo.style.position = 'fixed';
btnTopo.style.bottom = '20px';
btnTopo.style.right = '20px';
btnTopo.style.display = 'none';
btnTopo.style.background = '#4CAF50';
btnTopo.style.color = 'white';
btnTopo.style.border = 'none';
btnTopo.style.padding = '10px 15px';
btnTopo.style.borderRadius = '8px';
btnTopo.style.cursor = 'pointer';
btnTopo.style.fontSize = '16px';
btnTopo.style.boxShadow = '0 3px 10px rgba(0,0,0,0.2)';
document.body.appendChild(btnTopo);

// Mostra ou oculta o botão conforme o scroll
window.addEventListener('scroll', () => {
  btnTopo.style.display = window.scrollY > 300 ? 'block' : 'none';
});

// Evento de clique – rolar suavemente até o topo
btnTopo.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});