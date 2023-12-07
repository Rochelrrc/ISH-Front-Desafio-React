# Entendendo decisões arquiteturais e a estrutura do projeto

## Requisitos para rodar o projeto

### Setup de ambiente:

- [Node](https://nodejs.org/en)
- [React](https://react.dev/learn)

- [React Router Dom](https://github.com/remix-run/react-router#readme)

### Como acessar o link para teste?

- Teste: `https://6571d0af7a543413d9f40bf8--stunning-hotteok-c759ff.netlify.app`

## Desafio Harpia-ISH Site:

### Estrutura do projeto

- `./src/pages`: Pasta que armazena os arquivos referentes à cada tela.
- `./src/components`: Todos os elementos primordiais de interface, como os componentes `<Logo />`, folder, headers, footers etc.
  - `<Logo />`: Componente que contém o logotipo do projeto Harpia.
- `./src/assets`: Armazena todos os arquivos .png usados na criação desse projeto (ícones, imagens etc.).
- `./src/routes.js`: Local de "roteamento das rotas", no qual se encontra a organização de chamados das páginas.

### Como me localizar no projeto?

- Todas as páginas do projeto estão listadas em `./src/pages`.
  - Todos os `componentes` que integram as páginas estão em `./src/components`.
    - Uma vez dentro de uma página, você pode ir navegando pelos componentes para ir se encontrando e fazer a alteração desejada.

### Como usar?

- Ao acessar a página de login, haverá dois campos: um referente ao Email e outro ao Password.

  - Validações do campo Email: serão aceitos apenas emails que possuam letras e números com um domínio seguido de ".com".

  - Validações do campo Password: serão aceitos senhas com, no mínimo, seis caracteres, sem restrição de tipo.

- Caso o usuário esqueça sua senha, basta clicar no link "Forgot my password" abaixo do campo Password, que será redirecionado para a página de "Forgot my password".

- Na página de "Forgot my password" há apenas um campo de texto que recebe um email com válidações idênticas a da página de login e, sendo um email válido, retorna um aviso de sucesso no canto superior direito que fechará após 3 segundos.
