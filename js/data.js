window.projectsData = [
  /* {
   name: "Landing Page Moderna",
    description: "Landing page responsiva com animações CSS, gradientes modernos e design minimalista.",
    technologies: ["HTML", "CSS", "JavaScript"],
    type: "html-preview",
    htmlContent: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TechSolutions</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        header { background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); padding: 1rem 0; position: fixed; width: 100%; top: 0; z-index: 1000; }
        nav { display: flex; justify-content: space-between; align-items: center; }
        .logo { font-size: 1.5rem; font-weight: bold; color: white; }
        .nav-links { display: flex; list-style: none; gap: 2rem; }
        .nav-links a { color: white; text-decoration: none; transition: color 0.3s; }
        .nav-links a:hover { color: #ffd700; }
        .hero { height: 100vh; display: flex; align-items: center; justify-content: center; text-align: center; color: white; }
        .hero-content h1 { font-size: 3rem; margin-bottom: 1rem; animation: fadeInUp 1s ease; }
        .hero-content p { font-size: 1.2rem; margin-bottom: 2rem; animation: fadeInUp 1s ease 0.3s both; }
        .btn { display: inline-block; padding: 12px 30px; background: linear-gradient(45deg, #ffd700, #ffed4e); color: #333; text-decoration: none; border-radius: 25px; font-weight: bold; transition: transform 0.3s, box-shadow 0.3s; animation: fadeInUp 1s ease 0.6s both; }
        .btn:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(255, 215, 0, 0.3); }
        .services { padding: 4rem 0; background: white; }
        .services h2 { text-align: center; margin-bottom: 3rem; font-size: 2.5rem; color: #333; }
        .services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
        .service-card { background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 2rem; border-radius: 15px; text-align: center; transition: transform 0.3s; }
        .service-card:hover { transform: translateY(-10px); }
        .service-card h3 { margin-bottom: 1rem; font-size: 1.5rem; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @media (max-width: 768px) { .hero-content h1 { font-size: 2rem; } .nav-links { display: none; } }
    </style>
</head>
<body>
    <header><nav class="container"><div class="logo">TechSolutions</div><ul class="nav-links"><li><a href="#home">Início</a></li><li><a href="#services">Serviços</a></li><li><a href="#contact">Contato</a></li></ul></nav></header>
    <section class="hero" id="home"><div class="hero-content"><h1>Soluções Tecnológicas Inovadoras</h1><p>Transformamos suas ideias em realidade digital</p><a href="#services" class="btn">Conheça Nossos Serviços</a></div></section>
    <section class="services" id="services"><div class="container"><h2>Nossos Serviços</h2><div class="services-grid"><div class="service-card"><h3>Desenvolvimento Web</h3><p>Sites modernos e responsivos com as melhores tecnologias do mercado.</p></div><div class="service-card"><h3>Design UI/UX</h3><p>Interfaces intuitivas e experiências de usuário excepcionais.</p></div><div class="service-card"><h3>Consultoria Tech</h3><p>Estratégias tecnológicas para impulsionar seu negócio.</p></div></div></div></section>
</body>
</html>`,
    github: "#",
    demo: "#"
  },
  {
    name: "Calculadora Interativa",
    description: "Calculadora funcional com design moderno, operações básicas e avançadas.",
    technologies: ["HTML", "CSS", "JavaScript"],
    type: "html-preview",
    htmlContent: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Arial', sans-serif; background: linear-gradient(135deg, #1e3c72, #2a5298); min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 20px; }
        .calculator { background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); border-radius: 20px; padding: 30px; box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3); border: 1px solid rgba(255, 255, 255, 0.2); }
        .display { width: 100%; height: 80px; background: rgba(0, 0, 0, 0.3); border: none; border-radius: 15px; color: white; font-size: 2rem; text-align: right; padding: 0 20px; margin-bottom: 20px; outline: none; }
        .buttons { display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; }
        button { height: 60px; border: none; border-radius: 15px; font-size: 1.2rem; font-weight: bold; cursor: pointer; transition: all 0.3s ease; background: rgba(255, 255, 255, 0.2); color: white; backdrop-filter: blur(10px); }
        button:hover { transform: translateY(-2px); box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3); background: rgba(255, 255, 255, 0.3); }
        button:active { transform: translateY(0); }
        .operator { background: linear-gradient(135deg, #ff6b6b, #ee5a24); }
        .equals { background: linear-gradient(135deg, #00d2d3, #54a0ff); grid-row: span 2; }
        .clear { background: linear-gradient(135deg, #ff9ff3, #f368e0); }
        .zero { grid-column: span 2; }
    </style>
</head>
<body>
    <div class="calculator">
        <input type="text" class="display" id="display" readonly>
        <div class="buttons">
            <button class="clear" onclick="this.dispatchEvent(new CustomEvent('clearCalc', {bubbles: true}))">C</button>
            <button class="clear" onclick="this.dispatchEvent(new CustomEvent('deleteCalc', {bubbles: true}))">⌫</button>
            <button class="operator" onclick="this.dispatchEvent(new CustomEvent('appendCalc', {bubbles: true, detail: '/'}))">/</button>
            <button class="operator" onclick="this.dispatchEvent(new CustomEvent('appendCalc', {bubbles: true, detail: '*'}))">×</button>
            <button onclick="this.dispatchEvent(new CustomEvent('appendCalc', {bubbles: true, detail: '7'}))">7</button>
            <button onclick="this.dispatchEvent(new CustomEvent('appendCalc', {bubbles: true, detail: '8'}))">8</button>
            <button onclick="this.dispatchEvent(new CustomEvent('appendCalc', {bubbles: true, detail: '9'}))">9</button>
            <button class="operator" onclick="this.dispatchEvent(new CustomEvent('appendCalc', {bubbles: true, detail: '-'}))">-</button>
            <button onclick="this.dispatchEvent(new CustomEvent('appendCalc', {bubbles: true, detail: '4'}))">4</button>
            <button onclick="this.dispatchEvent(new CustomEvent('appendCalc', {bubbles: true, detail: '5'}))">5</button>
            <button onclick="this.dispatchEvent(new CustomEvent('appendCalc', {bubbles: true, detail: '6'}))">6</button>
            <button class="operator" onclick="this.dispatchEvent(new CustomEvent('appendCalc', {bubbles: true, detail: '+'}))">+</button>
            <button onclick="this.dispatchEvent(new CustomEvent('appendCalc', {bubbles: true, detail: '1'}))">1</button>
            <button onclick="this.dispatchEvent(new CustomEvent('appendCalc', {bubbles: true, detail: '2'}))">2</button>
            <button onclick="this.dispatchEvent(new CustomEvent('appendCalc', {bubbles: true, detail: '3'}))">3</button>
            <button class="equals" onclick="this.dispatchEvent(new CustomEvent('calculateCalc', {bubbles: true}))">=</button>
            <button class="zero" onclick="this.dispatchEvent(new CustomEvent('appendCalc', {bubbles: true, detail: '0'}))">0</button>
            <button onclick="this.dispatchEvent(new CustomEvent('appendCalc', {bubbles: true, detail: '.'}))">.</button>
        </div>
    </div>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const display = document.getElementById('display');
            let currentInput = '';
            
            document.body.addEventListener('appendCalc', e => { currentInput += e.detail; display.value = currentInput; });
            document.body.addEventListener('clearCalc', () => { currentInput = ''; display.value = ''; });
            document.body.addEventListener('deleteCalc', () => { currentInput = currentInput.slice(0, -1); display.value = currentInput; });
            document.body.addEventListener('calculateCalc', () => { try { currentInput = eval(currentInput.replace('×', '*')).toString(); display.value = currentInput; } catch { display.value = 'Erro'; currentInput = ''; } });
        });
    </script>
</body>
</html>`,
    github: "#",
    demo: "#"
  },
  {
    name: "Todo List Avançado",
    description: "Aplicação de lista de tarefas com funcionalidades completas e dados salvos no localStorage.",
    technologies: ["HTML", "CSS", "JavaScript"],
    type: "html-preview",
    htmlContent: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo List</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Arial', sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: rgba(255, 255, 255, 0.95); border-radius: 20px; padding: 30px; box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1); }
        h1 { text-align: center; color: #333; margin-bottom: 30px; font-size: 2.5rem; }
        .input-section { display: flex; gap: 10px; margin-bottom: 30px; }
        #todoInput { flex: 1; padding: 15px; border: 2px solid #ddd; border-radius: 10px; font-size: 1rem; outline: none; transition: border-color 0.3s; }
        #todoInput:focus { border-color: #667eea; }
        #addBtn { padding: 15px 25px; background: linear-gradient(135deg, #667eea, #764ba2); color: white; border: none; border-radius: 10px; cursor: pointer; font-size: 1rem; font-weight: bold; }
        .todo-list { list-style: none; }
        .todo-item { background: white; margin-bottom: 10px; padding: 15px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); display: flex; align-items: center; gap: 15px; }
        .todo-item.completed .todo-text { text-decoration: line-through; color: #6c757d; }
        .todo-checkbox { width: 20px; height: 20px; cursor: pointer; }
        .todo-text { flex: 1; font-size: 1rem; color: #333; }
        .delete-btn { padding: 5px 10px; border: none; border-radius: 5px; cursor: pointer; background: #dc3545; color: white; }
    </style>
</head>
<body>
    <div class="container">
        <h1>📝 Todo List</h1>
        <div class="input-section">
            <input type="text" id="todoInput" placeholder="Adicione uma nova tarefa...">
            <button id="addBtn">Adicionar</button>
        </div>
        <ul class="todo-list" id="todoList"></ul>
    </div>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const todoInput = document.getElementById('todoInput');
            const addBtn = document.getElementById('addBtn');
            const todoList = document.getElementById('todoList');
            let todos = JSON.parse(localStorage.getItem('todos')) || [];

            const saveTodos = () => localStorage.setItem('todos', JSON.stringify(todos));

            const renderTodos = () => {
                todoList.innerHTML = '';
                todos.forEach((todo, index) => {
                    const li = document.createElement('li');
                    li.className = 'todo-item' + (todo.completed ? ' completed' : '');
                    li.innerHTML = \`
                        <input type="checkbox" class="todo-checkbox" \${todo.completed ? 'checked' : ''} data-index="\${index}">
                        <span class="todo-text">\${todo.text}</span>
                        <button class="delete-btn" data-index="\${index}">Excluir</button>
                    \`;
                    todoList.appendChild(li);
                });
            };

            const addTodo = () => {
                const text = todoInput.value.trim();
                if (text) {
                    todos.push({ text, completed: false });
                    todoInput.value = '';
                    saveTodos();
                    renderTodos();
                }
            };

            addBtn.addEventListener('click', addTodo);
            todoInput.addEventListener('keypress', e => e.key === 'Enter' && addTodo());

            todoList.addEventListener('click', e => {
                const index = e.target.dataset.index;
                if (e.target.classList.contains('delete-btn')) {
                    todos.splice(index, 1);
                } else if (e.target.classList.contains('todo-checkbox')) {
                    todos[index].completed = !todos[index].completed;
                }
                saveTodos();
                renderTodos();
            });

            renderTodos();
        });
    </script>
</body>
</html>`,
    github: "#",
    demo: "#"
  },*/
  {
    name: "E-commerce",
    description: "Plataforma de e-commerce completa com carrinho de compras, painel administrador e controle de estoque.",
    technologies: ["React", "Firebase", "TypeScript"],
    image: "img/araujo-esportes.png",
    github: "https://github.com/felipegaldinos",
    demo: "https://catalogo-araujo-esportes.firebaseapp.com"
  },
  {
    name: "Site para Acadêmia",
    description: "Modelo de site intitucional que se encaixa em vários nichos.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "img/academia.png",
    github: "https://github.com/felipegaldinos",
    demo: "https://academia-roan-ten.vercel.app/"
  },
  {
    name: "Site para agendamento de viagens",
    description: "Site institucional para reservar viagens.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "img/destino.png",
    github: "https://github.com/felipegaldinos",
    demo: "https://destino-encantado.vercel.app/"
  },
  {
    name: "Site de saúde e lazer",
    description: "Site institucional de saúde e lazer .",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "img/equilibrio.png",
    github: "https://github.com/felipegaldinos",
    demo: "https://equlibrio-vital.vercel.app/"
  },
  {
    name: "Landing page para Acadêmia",
    description: "Modelo de site página unica para capitação de clientes.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "img/vivafit.png",
    github: "https://github.com/felipegaldinos",
    demo: "https://vivafit-academia.vercel.app/"
  },
  {
    name: "Clínica Médica",
    description: "Site para clinicas médicas, com agenda, mapa de localização e etc.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "img/medica.png",
    github: "https://github.com/felipegaldinos",
    demo: "https://clinica-vida-plena.vercel.app/"
  },
  {
    name: "Clínica Odontológica",
    description: "Site institucional de saúde e lazer .",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "img/sorriso.png",
    github: "https://github.com/felipegaldinos",
    demo: "https://sorriso-ideal.vercel.app/"
  },
  {
    name: "Portifólio",
    description: "Portifólio moderno, com galeria de projetos e com uma pré-vizualização do site.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "img/portifolio0.png",
    github: "https://github.com/felipegaldinos",
    demo: "https://felipegaldinos.github.io/portifolio-tecnico/"
  },
  {
    name: "CVCroft gerado de currículo",
    description: "Plataforma geradora de currículo com IA.",
    technologies: ["React", "Firebase", "TypeScript"],
    image: "img/CVCroft.png",
    github: "https://github.com/felipegaldinos",
    demo: "https://curriculo-inteligente-3f70e.firebaseapp.com/"
  },
  {
    name: "Loja de calçados",
    description: "Loja de calçados, com carrinho e opção de marca seu favorito.",
    technologies: ["React", "TypeScript"],
    image: "img/calcados.png",
    github: "https://github.com/felipegaldinos",
    demo: "https://loja-calcados-nine.vercel.app/"
  },
  {
    name: "Landing Page",
    description: "Landing page da empresa PotiguarTech, completa.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "img/potiguar.png",
    github: "https://github.com/felipegaldinos",
    demo: "https://potiguar-tech.vercel.app/"
  },
  {
    name: "Intituto de Cursos FGS",
    description: "Plataforma de cursos gratuítos de tecnologia.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "img/instituto.png",
    github: "https://github.com/felipegaldinos",
    demo: "https://instituto-fgs.vercel.app/"
  },
  {
    name: "Loja online simples",
    description: "Loja online, com catálogo de produtos que direciona para o whatsapp.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "img/catalogo00.png",
    github: "https://github.com/felipegaldinos",
    demo: "https://loja-araujo-esportes.vercel.app/"
  },
  {
    name: "Portífolio Web",
    description: "Portífolio web, formato institucional.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "img/portifolioweb.png",
    github: "https://github.com/felipegaldinos",
    demo: "https://felipegaldinos.github.io/portifolio-web/"
  },
  {
    name: "Landing page Vendas VSL",
    description: "Página de Vendas com VSL que Vendem Mesmo Enquanto Você Dorme!",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "img/vsl.png",
    github: "https://github.com/felipegaldinos",
    demo: "https://landingpage-vendas.vercel.app/"
  },
  {
    name: "Landing page para vendas de Smartphone",
    description: "Modelo de página que aumenta o número de vendas.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "img/celular.png",
    github: "https://github.com/felipegaldinos",
    demo: "https://felipegaldinos.github.io/landingpage-celular/"
  },
  {
    name: "Catálogo de produtos",
    description: "Catálogo de produtos, com carrinho e direcionamento para compras via whatsapp.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "img/catalogo-araujo.png",
    github: "https://github.com/felipegaldinos",
    demo: "https://catalogo-pied.vercel.app/"
  }
];
