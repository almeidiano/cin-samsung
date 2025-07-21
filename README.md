# Dashboard de Livros - OpenLibrary

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
- Storybook

## Instalação
- npm install
- npm start

## Scripts Disponíveis
- `npm start`: Desenvolvimento
- `npm run build`: Build de produção

## Decisões Técnicas

###

## Próximos Passos

### Erro de paginação (OpenLibrary)
Durante o desenvolvimento, infelizmente a API da open library frequentemente retoronou erro 500 ao inserir o caractere * no parâmetro query. Porém, isso é devidamente tratado na aplicação e esse erro é ignorado através de uma simples busca no campo de pesquisa.
