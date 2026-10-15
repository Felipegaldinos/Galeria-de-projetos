# Galeria de Projetos

Vitrine de projetos com busca, filtros por tecnologia, destaques e links para código e demonstrações. Inclui registro de interações e um painel de métricas com Firebase e Chart.js.

## Funcionalidades

- Busca pelo nome ou descrição e filtros por tecnologia.
- Projetos em destaque e carregamento progressivo de seis itens.
- Suporte a previews HTML em iframe e visualização ampliada.
- Preferência de tema salva em localStorage.
- Registro de visitas e cliques; painel com gráficos e filtro de datas.

## Tecnologias

HTML, CSS, JavaScript, Firebase compat via CDN e Chart.js.

## Como executar

Clone o repositório e sirva a pasta por HTTP. Uma opção, caso tenha Python 3 instalado:

```sh
git clone https://github.com/Felipegaldinos/Galeria-de-projetos.git
cd Galeria-de-projetos
python -m http.server 8000
```

Abra http://localhost:8000. Não é necessário instalar pacotes npm. Recursos externos, como imagens e bibliotecas via CDN, exigem conexão com a internet.

## Organização do código

- `index.html` — vitrine pública.
- `dashboard.html` — painel de métricas.
- `js/data.js` — informações dos projetos.
- `js/gallery.js` — busca, filtros, cards e previews.
- `js/event-tracker.js` — eventos na coleção eventos.
- `js/dashboard.js` — consultas e gráficos.

## Roteiro de demonstração

Busque um projeto, altere o filtro, carregue mais itens e mude o tema. Com Firebase de teste configurado, confira eventos e filtro de datas em /dashboard.html.

## Limitações atuais

js/firebase-config.js contém um valor de exemplo para a API key no caminho executado pelo navegador. Configure seu próprio projeto para as métricas. Variáveis process.env não são injetadas automaticamente em um script estático do navegador. O painel não apresenta uma barreira de autenticação no HTML e JavaScript analisados; restrinja a leitura dos eventos com regras apropriadas antes de publicar métricas reais.

## Competências demonstradas

Organização de portfólio, manipulação do DOM e instrumentação de interações.

## Autoria

Projeto disponível no perfil de [Felipe Galdino](https://github.com/Felipegaldinos). Consulte os arquivos do repositório para verificar os termos de licença aplicáveis.
