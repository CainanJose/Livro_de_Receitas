// 1️⃣ Menu Mobile (já feito)
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// 2️⃣ Mensagem de boas-vindas
window.addEventListener('load', () => {
  console.log("🍲 Bem-vindo ao Livro de Receitas!");
});

// 3️⃣ Mostrar quantas receitas existem
const receitas = document.querySelectorAll('.receita');
console.log(`O site possui ${receitas.length} receitas cadastradas.`);

// 4️⃣ Mudança de cor ao passar o mouse nas imagens
document.querySelectorAll('.imagem-receita').forEach(img => {
  img.addEventListener('mouseover', () => {
    img.style.filter = 'brightness(1.2)';
  });
  img.addEventListener('mouseout', () => {
    img.style.filter = 'brightness(1)';
  });
});

// 5️⃣ Botão “voltar ao topo”
const btnTopo = document.createElement('button');
btnTopo.textContent = '⬆️ Topo';
btnTopo.id = 'btnTopo';
btnTopo.style.position = 'fixed';
btnTopo.style.bottom = '20px';
btnTopo.style.right = '20px';
btnTopo.style.display = 'none';
document.body.appendChild(btnTopo);

window.addEventListener('scroll', () => {
  btnTopo.style.display = window.scrollY > 300 ? 'block' : 'none';
});

btnTopo.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
