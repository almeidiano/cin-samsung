# Dashboard de Livros - OpenLibrary

Prévia do projeto: [http://desafio-tecnico.almeidiano.dev/](http://desafio-tecnico.almeidiano.dev/)

## Visão Geral

### Descrição do Projeto
Aplicação web Dashboard de Livros que permite gerenciar obras a partir da API pública da OpenLibrary

### Funcionalidades
Listar, pesquisar e visualizar detalhes das obras.

## Tecnologias
- React 19.1.0
- Material-UI 7.x
- Axios
- React Testing Library
- Vitest
- Storybook

## Instalação
- npm install
- npm start ou npm run dev (Padrão do Vite)

## Scripts Disponíveis
- `npm start`: Desenvolvimento
- `npm run build`: Build de produção
- `npm run test`: Executar testes com a ferramenta Vitest (Ver observação para mais detalhes)
- `npm run storybook`: Testar componentes isoladamente com o workshop Storybook

## Decisões Técnicas

### Arquitetura
O projeto é estruturado em componentes reutilizáveis, no qual estão localizados na pasta `src/components`. Para fins de organização, os testes unitários estão localizados em `src/componentes/tests`.

## Próximos Passos

### Erro de paginação (OpenLibrary)
Durante o desenvolvimento, infelizmente a API da open library frequentemente retornou erro 500 ao inserir o caractere "*" no parâmetro query. Porém, isso é devidamente tratado na aplicação e esse erro é ignorado através de uma simples busca no campo de pesquisa.

### Observação: Mudança de ferramenta dos Testes Unitários 

Devido à incompatibilidade do Jest com a ferramenta [Vite](https://vite.dev/), na qual este projeto foi desenvolvido, foi necessário migrar para uma ferramenta de testes unitários semelhante, [recomendada pela própria documentação do Jest](https://jestjs.io/docs/getting-started#using-vite): o [Vitest](https://vitest.dev/).  

Detalhes:

Vitest é o substituto recomendado do Jest para projetos Vite.  
A API é quase idêntica à do Jest, então os mesmos exemplos de teste seguem normalmente.