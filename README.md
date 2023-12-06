# Entendendo decisões arquiteturais e a estrutura do projeto

## Requisitos para rodar o projeto

### Setup de ambiente:

- [Node](https://nodejs.org/en)
  
- [React](https://react.dev/learn)

- [React Router Dom](https://github.com/remix-run/react-router#readme)

### Como acessar link test?

- Teste: `git clone https://github.com/alura/techguide.git`


## Desafio Harpia-ISH Site:

### Estrutura do projeto

- `./pages`: É a pasta onde está armazenado os arquivos referentes a cada tela.
- `./src/components`: São todos os pedaços primordiais de interface como componentes `<Logo>`, folder, headers, footers e etcs. 
  - `<Logo>`: É um componente que guarda o logotipo do projeto Harpia. 
 
   
- `./src/assets`: Assets armazena todos os arquivos .png usados na criação desse projeto(icones, imagens e etcs).
- `./src/routes.js`: É o local de "roteamento das rotas" onde se localiza a organização de chamados das páginas.

### Como me localizar no projeto?

- Todas as páginas do projeto estão listadas em `./pages`
  - Todos os `componentes` que representam as páginas estão em `./src/components`
    - Uma vez dentro de uma página você pode ir navegando pelos componentes para ir se encontrando e fazer a alteração que deseja


### Como usar?

- Na pagina de login ao acessar haverá dois campos um referente ao email e outro ao password.

    - Validações do campo Email: Ele aceitará apenas emails que possuam letras e numeros juntos a um domínio seguido de ".com"

    - Password do campo Password: Será aceito senhas acima de 6 caracteres sem restrição de tipo.

- Caso o usuário esqueça sua senha, basta clicar no link "Forgot my password" abaixo do campo Password e será redirecionado para a tela de "Forgot my password".

- Na página de forgot my passwor há apenas um campo de texto que recebe um email com válidações identicas a da tela de login e caso seja válido retorna um aviso de sucesso no canto superior direito que fechara em 3 segundos.

