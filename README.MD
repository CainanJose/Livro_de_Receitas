# 🍲 Livro de Receitas

> **Portal interativo desenvolvido com HTML5, CSS3 e JavaScript puro**, reunindo receitas, dicas e curiosidades culinárias com design responsivo, modo escuro, e múltiplas funcionalidades dinâmicas.  
> Criado com foco em boas práticas de **Front-End**, **organização de código**, **UX/UI** e **acessibilidade**.

---

## 🧭 Sumário

1. [📘 Visão Geral](#-visão-geral)  
2. [🎯 Objetivos do Projeto](#-objetivos-do-projeto)  
3. [⚙️ Funcionalidades](#️-funcionalidades)  
4. [🧱 Estrutura de Pastas](#-estrutura-de-pastas)  
5. [🌐 Páginas e Recursos](#-páginas-e-recursos)  
6. [💡 Tecnologias Utilizadas](#-tecnologias-utilizadas)  
7. [📈 Design e Responsividade](#-design-e-responsividade)  
8. [🌙 Modo Escuro](#-modo-escuro)  
9. [🎨 Estilo e UX/UI](#-estilo-e-uxui)  
10. [🧠 Lógica JavaScript](#-lógica-javascript)  
11. [🚀 Como Executar Localmente](#-como-executar-localmente)  
12. [🔍 Detalhamento por Página](#-detalhamento-por-página)  
13. [🧾 Requisitos e Entregáveis](#-requisitos-e-entregáveis)  
14. [📦 Versões e Evolução](#-versões-e-evolução)  
15. [🧩 Aprendizagens e Competências](#-aprendizagens-e-competências)  
16. [🧑‍💻 Autor e Créditos](#-autor-e-créditos)  
17. [📜 Licença](#-licença)  

---

## 📘 Visão Geral

O **Livro de Receitas** é um projeto front-end completo que combina:

- Estrutura semântica em **HTML5**
- Estilos refinados e responsivos com **CSS3 (Flexbox + Grid)**
- Interatividade, animações e lógica em **JavaScript puro**

O projeto simula um **portal culinário profissional**, com páginas integradas, recursos dinâmicos e modo escuro persistente.  
Cada arquivo segue uma padronização modular e comentada, destacando clareza e boas práticas.

---

## 🎯 Objetivos do Projeto

- Demonstrar domínio de **HTML, CSS e JavaScript**
- Criar uma aplicação **responsiva e funcional**
- Aplicar conceitos de **UX/UI Design**
- Implementar **modo escuro persistente com localStorage**
- Praticar **animações, filtros e eventos DOM**
- Desenvolver um **site completo**, com múltiplas páginas interativas

---

## ⚙️ Funcionalidades

| Função | Descrição |
|:--|:--|
| 📱 **Menu Mobile** | Abre e fecha o menu de navegação no celular. |
| 👋 **Toast de boas-vindas** | Saudação automática ao carregar a página. |
| ⏰ **Relógio Dinâmico** | Exibe data e hora atualizadas em tempo real. |
| 🌗 **Modo Claro/Escuro** | Alterna o tema e mantém a escolha salva. |
| 💤 **Mensagem de Inatividade** | Alerta após 60s sem interação. |
| 🔍 **Filtro de Receitas** | Busca por nome e categoria (data-categoria). |
| 🎲 **Botão “Sortear Receita”** | Escolhe uma receita aleatoriamente. |
| 🧁 **Animações de Entrada** | Cards aparecem suavemente com fade-in. |
| 🖼️ **Galeria Interativa** | Zoom, pulsação e seleção visual nas imagens. |
| 🎧 **Áudio Motivacional** | Reproduz sons/efeitos com controle JS. |
| 📬 **Formulário Validado** | Campos obrigatórios com toast de sucesso. |
| ❓ **FAQ Dinâmico** | Expande/responde perguntas com transição. |
| ⬆️ **Botão “Voltar ao Topo”** | Rolagem suave de retorno. |
| 💬 **Toasts Empilháveis** | Mensagens flutuantes empilhadas no canto. |
| 🌙 **Dark Mode Completo** | Estilo coerente para todas as seções. |

---

## 🧱 Estrutura de Pastas

📁 css/
│ └── style.css → Estilos principais, dark mode e responsividade
📁 js/
│ └── script.js → Funções interativas e animações JS
📁 imagens/ → Assets, ícones e fotos de receitas
📁 audio/ → audios utilizados
📁 video/ → videos utilizados
---

## 🌐 Páginas e Recursos

📄 index.html → Página inicial (introdução e apresentação)
📄 receitas.html → Listagem com cards e filtro dinâmico
📄 dicas.html → Dicas e curiosidades culinárias
📄 galeria.html → Galeria com imagens, vídeos e áudios
📄 contato.html → Formulário de contato e FAQ
📄 README.md → Documentação do projeto


---

## 🌐 Páginas e Recursos

### 🏠 **index.html**
Apresenta o projeto, sua proposta e introdução visual.  
Inclui chamadas para outras páginas e animação de entrada.

**Recursos usados:** Flexbox · Botões sociais · Responsividade total  

---

### 📖 **receitas.html**
Página principal com **cards interativos** e **filtro automático**.  
Cada card inclui imagem, ingredientes, preparo e categoria (`data-categoria`).

**Destaques técnicos:**
- Filtro dinâmico via eventos `input` e `change`
- Botão “Sortear Receita”
- Animação `fadeInUp` em cada card
- Toast com feedback das ações do usuário

---

### 💡 **dicas.html**
Lista de dicas práticas e **curiosidades culinárias** com ícones.  
Cada dica é clicável e dispara uma notificação visual.

**Destaques técnicos:**
- Interação via `addEventListener('click')`
- Fundo temático (#fffbea)
- Total integração com modo escuro
- Animação hover em listas

---

### 🖼️ **galeria.html**
Galeria com imagens, vídeos e áudio.  
As imagens têm **efeito de zoom**, **seleção pulsante** e **toast com nome da receita**.

**Destaques:**
- Classe `.ativo` alternada pelo JS
- Efeito de “pulsar” contínuo via `@keyframes`
- Controle de borda e sombra no clique
- Transições suaves e elegantes

---

### 📬 **contato.html**
Formulário funcional com validação de campos e toast de sucesso.  
Contém também uma seção de **FAQ** e botões de redes sociais.

**Recursos JS:**
- Evento `submit` interceptado com `preventDefault()`
- Reset automático dos campos
- Feedback visual com toasts animados

---

## 💡 Tecnologias Utilizadas

| Tecnologia | Uso Principal |
|-------------|---------------|
| **HTML5** | Estrutura semântica das páginas |
| **CSS3** | Estilização, Flexbox, Grid, animações |
| **JavaScript** | Lógica, eventos DOM, interatividade |
| **Vercel** | Hospedagem e deploy automático |
| **GitHub** | Versionamento e controle de versões |
| **LocalStorage** | Persistência do tema escuro |

---

## 📈 Design e Responsividade

- Layout fluido usando **Flexbox** e **Grid**
- Páginas 100% responsivas (breakpoint `768px`)
- Elementos adaptáveis com `max-width` e `auto-fit`
- Menu “hambúrguer” funcional no mobile
- Tamanhos e espaçamentos proporcionais (rem, %)

---

## 🌙 Modo Escuro

- Implementado via `classList.toggle('dark')`
- Tema salvo no `localStorage`
- Adapta cores de fundo, texto, bordas e ícones
- Contraste testado com **WCAG** (acessibilidade)
- Transição suave com `transition: 0.3s ease`

---

## 🎨 Estilo e UX/UI

- Paleta de cores baseada em tons de **verde (tema principal)**  
- Ícones e emojis contextualizados para melhor leitura  
- Espaçamento e tipografia otimizados para conforto visual  
- Botões animados com `:hover` e `transform: scale()`  
- Cards com `box-shadow` e efeito de elevação  
- Scroll suave e feedback visual em todas as ações  

---

## 🧠 Lógica JavaScript

- Modularização por seções comentadas  
- Uso de `querySelectorAll`, `forEach`, `addEventListener`  
- Controle de estado com classes (`ativo`, `selecionada`)  
- Funções anônimas e arrow functions  
- Sistema de **toasts empilháveis**  
- Estrutura de **condicionais encadeadas** para filtros  
- Integração com o DOM e uso de `localStorage`  

---

## 🚀 Como Executar Localmente

### 1️⃣ Clone o repositório
```bash
git clone https://github.com/CainanJose/Livro_de_Receitas.git

### 2️⃣ Acesse o diretório

cd Livro_de_Receitas

### 3️⃣ Abra o projeto no navegador

start index.html

ou simplesmente arraste o arquivo index.html para seu navegador.

💡 Não há dependências externas — o projeto roda 100% localmente.

🔍 Detalhamento por Página
Página	Descrição	Destaques
index.html	Apresentação inicial	Botões de navegação, animações, design centralizado
receitas.html	Cards e filtro dinâmico	Busca por nome/categoria, botão “Sortear Receita”
dicas.html	Dicas rápidas	Toasts personalizados e hover temático
galeria.html	Galeria multimídia	Zoom, pulsação, vídeos e áudio
contato.html	Formulário funcional	Validação, FAQ e botões sociais
🧾 Requisitos e Entregáveis

✅ 500+ linhas de HTML

✅ 400+ linhas de CSS

✅ 300+ linhas de JS

✅ Estrutura modular e comentada

✅ Design 100% responsivo

✅ Deploy funcional na Vercel

✅ Repositório com commits contínuos

🧩 Aprendizagens e Competências

🌐 Técnicas

Estrutura semântica com tags HTML5

Organização modular de CSS (reset, layout, seções, animações)

Uso de @media queries e unidades relativas

Implementação de modo escuro com persistência

Manipulação do DOM com JavaScript puro

Tratamento de eventos (click, submit, input)

Aplicação de feedback visual em UX (toasts, hover, transições)

Uso de localStorage e boas práticas de performance

💭 Conceituais

Responsividade e design centrado no usuário

Acessibilidade visual e contraste

Organização de código e comentários explicativos

Planejamento modular de páginas

Deploy e versionamento profissional

🧑‍💻 Autor e Créditos
### 👥 **Integrantes do Grupo**

| Nome Completo | RA |
|----------------|----|
| **Cainã José Arruda Pinto** | 210626 |
| **João Vitor Aguiar da Silva** | 249041 |
| **Ketyllyn** | 247945 |
| **Lucas Toledo Cappello** | 240433 |
| **Rui Anderson** | 24866 |

🎓 Estudante de Engenharia / Desenvolvimento Web
💼 Estagiário de TI — Chemyunion
💡 Foco em automação, dashboards e aplicações interativas


🐙 GitHub: https://github.com/CainanJose/Livro_de_Receitas.git

📜 Licença

Este projeto é distribuído sob a MIT License.
Você pode usar, modificar e redistribuir livremente, citando a autoria.

💬 Mensagem Final

“O Livro de Receitas representa o equilíbrio entre criatividade e técnica.
Cada linha de código é um ingrediente que transforma aprendizado em experiência prática.
Cozinhar e programar têm algo em comum: ambos unem paixão, precisão e arte.” 🍽️