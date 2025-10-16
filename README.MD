🍲 Livro de Receitas
📚 Descrição do Projeto

Pequeno site interativo e responsivo que reúne receitas, dicas e galeria culinária, desenvolvido com HTML5, CSS3 e JavaScript puro.
O projeto foca em design intuitivo, interatividade, organização de código e boas práticas de front-end — simulando um portal real de receitas.

⚙️ Funcionalidades JavaScript

📱 Menu Mobile (toggle) — abre e fecha o menu com animação.

👋 Toast de boas-vindas — mensagem automática com fade-in e fade-out.

⏰ Atualização automática da hora — exibe data e hora em tempo real.

⬆️ Botão “Voltar ao topo” — rolagem suave para o início da página.

🌗 Modo Claro/Escuro — tema persistente com localStorage.

🔍 Filtro de receitas — busca por nome e categoria via data-categoria.

🧩 Animações de entrada — cards de receitas surgem com transição suave.

🖼️ Zoom em imagens — efeito ao passar o mouse ou clicar na galeria.

📬 Formulário de contato — validação e feedback visual com toast.

💤 Mensagem de inatividade — alerta automático após 60s sem interação.

🎲 Botão “Sortear Receita” — escolhe aleatoriamente uma receita da tela.

🌙 Modo escuro completo — todas as seções adaptadas para contraste ideal.

🧱 Estrutura do Projeto
📁 css/
│   └── style.css        → estilos completos (reset, flexbox, animações, dark mode)
📁 js/
│   └── script.js        → todas as funcionalidades dinâmicas e interativas
📁 imagens/              → assets das receitas, galeria e ícones
📄 index.html            → página inicial com apresentação do site
📄 receitas.html         → lista interativa de receitas filtráveis
📄 dicas.html            → dicas e curiosidades culinárias clicáveis
📄 galeria.html          → galeria com zoom e seleção de imagens
📄 contato.html          → formulário validado e seção FAQ
📄 README.md             → documentação completa do projeto


📄 Páginas do Projeto (Descrição Individual)
🏠 index.html — Página Inicial

Apresenta o título do projeto e a introdução ao portal de receitas.

Contém história e missão do site.

Possui link direto para a seção de receitas e botões de navegação.

É o primeiro contato do usuário, com animação suave e design limpo.

🔹 Tecnologias aplicadas: Flexbox, tipografia sem serifa, contraste de cores, responsividade completa.

📖 receitas.html — Página de Receitas

Principal página do site.

Contém filtro de busca (por nome e categoria) e botão 🎲 “Sortear Receita”.

Cada receita é um card interativo com imagem, descrição, ingredientes e preparo.

O JS controla animações de entrada, filtro dinâmico e notificações (toasts).

🔹 Destaques técnicos:

data-categoria aplicado em cada <section class="receita"> para facilitar filtragem.

Filtro em tempo real com eventos input e change.

Modo escuro adaptado para cards e textos.

💡 dicas.html — Página de Dicas

Reúne uma lista de dicas rápidas de cozinha com emojis e estilo descontraído.

Ao clicar em cada dica, o usuário recebe um toast personalizado.

Inclui uma seção “Curiosidades Culinárias” com estilo próprio e hover suave.

🔹 Destaques técnicos:

Interatividade simples via addEventListener('click').

CSS com fundo temático (#fffbea) e borda lateral verde.

Total compatibilidade com modo escuro (background: #1e1e1e).

🖼️ galeria.html — Página da Galeria

Mostra uma coleção de imagens e vídeos culinários, e um pequeno áudio inspiracional.

Cada imagem é clicável, ganhando destaque visual e borda colorida ao ser selecionada.

O JS exibe mensagem “📸 Selecionou: nome da imagem” via toast.

Os vídeos são incorporados do YouTube (uso de <iframe>).

🔹 Destaques técnicos:

Eventos click e mouseenter nas imagens.

Classe .selecionada aplicada dinamicamente no JS.

Transição suave e efeito de “pulsar” na imagem ativa.

Toast e filtro integrados ao modo escuro.

📬 contato.html — Página de Contato

Contém formulário funcional com validação de campos e toast de sucesso.

Campos: nome, e-mail e mensagem.

Ao enviar, o JS previne recarregamento (e.preventDefault()), reseta o formulário e mostra feedback.

Seção extra de FAQ com perguntas frequentes estilizadas.

🔹 Destaques técnicos:

Eventos submit e click para interação.

Animações suaves e feedback visual imediato.

Responsivo e adaptado ao modo escuro.
🧾 Requisitos Atendidos

✅ +500 linhas no HTML
✅ +400 linhas no CSS
✅ +300 linhas no JS
✅ Código limpo e comentado
✅ Estrutura modular e responsiva
✅ Versionamento contínuo no GitHub
✅ Publicação online funcional

🚀 Demonstração

🔗 Deploy (Vercel): https://guia-receitas.vercel.app/

📂 Repositório GitHub: https://github.com/CainanJose/Livro_de_Receitas.git

🧠 Aprendizagens Obtidas

Estruturação semântica completa com HTML5.

Criação de layouts fluidos com Flexbox e Grid.

Implementação de modo escuro com persistência via localStorage.

Uso de atributos data-* para filtros dinâmicos de categorias.

Manipulação e animação de elementos com JavaScript puro.

Aplicação de boas práticas de UX/UI (feedback visual, transições suaves, toasts).

Versionamento e deploy profissional com GitHub + Vercel.

Organização modular do código com comentários e seções numeradas.

📈 Evolução do Projeto
Etapa	Descrição
v1.0	Estrutura inicial HTML/CSS estática.
v2.0	Implementação do JS, modo escuro, animações e responsividade.
v3.0	Adição de filtro de receitas, botão de sorteio, galeria interativa e toasts empilháveis.
v3.1 (final)	Refinamento de UX, correção de contraste, minificação do JS e otimização para deploy.

📜 Licença

Este projeto é de uso livre para fins educacionais.
📘 MIT License — Você pode usar, modificar e redistribuir, desde que cite a autoria.

💬 Resumo Final

“O Livro de Receitas representa o domínio das bases da Web — transformando HTML, CSS e JavaScript em um produto funcional, bonito e responsivo.
O projeto une técnica, criatividade e boas práticas de programação em um só prato.” 🍽️