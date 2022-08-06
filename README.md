# Investment API

## Descrição
- O desafio apresenta uma aplicação de investimento em ações com algumas funcionalidades de conta digital.

## Funcionalidades
- Compra/venda de ativos
- Visualização de ativos disponíveis na carteira do cliente e na corretora
- Visualização de saldo em conta
- Depósito/saque

## Decisões
- O README está em português. O código e os commits estão em inglês.
- O projeto foi desenvolvido em TypeScript para garantir a tipagem estática e forte, promovendo um código mais seguro e mais fácil de refatorar (além do autocomplete :sweat_smile:)
- Decidi não utilizar ORM para demonstrar o domínio na criação direta de tabelas no MySQL e no uso das queries
- Decidi não usar TDD, pois priorizei os requisitos mínimos na fase de levantamento (testes unitários são requisitos adicionais)
- Usei ESLint (airbnb-base) para padronizar o código -> maior legibilidade e facilita a identificação de erros/problemas durante o desenvolvimento
- Dockerizei a aplicação para que ela funcione em qualquer ambiente
- Testei com Jest pois apresenta a melhor documentação para uso com TS entre as ferramentas de teste que já utilizei
- Usei Joi para facilitar as validações

## Como rodar
1. Clone o repositório
- SSH: `git clone git@github.com:lucasdvilar/psel-xp.git`
- HTTPS: `git clone https://github.com/lucasdvilar/psel-xp.git`

2. Instale as dependências
> Com Docker
- `docker build -t psel-xp .`
- `docker run -it -p 3000:3000 --name psel-xp-container psel-xp sh`
- `npm install`
> Sem Docker
- `npm install`

3. Variáveis de ambiente
- Crie seu banco (db.sql) e defina suas variáveis de ambiente num arquivo .env de acordo com .env.example

3. Opcões de execução/compilação/teste
- Para executar: `npm start`
- Para executar em modo de desenvolvimento: `npm run dev`
- Para compilar: `npm run build`
- Para testar: `npm test`
- ⚠ Caso opte por utilizar Docker, todos os comandos acima devem ser executados dentro do container
- ⚠ Caso tenha saído: `docker exec -it psel-xp-container sh`

## Banco de dados
- Subi o banco no Heroku através do add-on ClearDB
- Diagrama ER:
<img src="public/er_diagram.png" width="800px">

## Documentação da API
- https://documenter.getpostman.com/view/21027257/UzXNVHyS

## Deploy
- https://psel-xp-lucasdvilar.herokuapp.com/

## Melhorias
- Criptografia de senhas com Bcrypt
- Realizar mais testes
- Adicionar novas funcionalidades