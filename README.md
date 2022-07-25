<p align="center">
	<img src="https://www.meioemensagem.com.br/wp-content/uploads/2019/09/marca_final_XPinc-2-1024x357.jpg" height="30" width="50" alt="Logo da XP">
	<img src="https://www.integracaodaserra.com.br/wp-content/uploads/2021/09/9814df697eaf49815d7df109110815ff887b3457.png" height="30" width="50" alt="Logo da Trybe">
</p>

# Desafio de Back-end - PSel XP/Trybe

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
- Usei ESLint para padronizar o código -> maior legibilidade e facilita a identificação de erros/problemas durante o desenvolvimento
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
- Caso queira criar seu banco (use o diagrama da seção Banco de dados como base), defina suas variáveis de ambiente
- Para avaliação, aqui estão as variáveis com as credenciais do banco que subi:
	- PORT=3000
	- MYSQL_HOST=us-cdbr-east-06.cleardb.net
	- MYSQL_USER=b87fa8e75e08a3
	- MYSQL_PASSWORD=6232e331
	- MYSQL_DATABASE=heroku_6efb7909b2f5454
	- SECRET=secret

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
- Fora os endpoints de depósito, login e listar ativos, todos os outros precisam de autenticação (feito com JWT)
- Endpoints que recebem o código do cliente pela URL bloqueiam o acesso caso o usuário logado não seja o mesmo
- Existem validações Joi em todos os métodos POST
- POST /investimentos/comprar: comprar ativos na conta logada (recebe assetId e quantity pelo body)
- POST /investimento/vender: vender ativos na conta logada (recebe assetId e quantity pelo body)
- GET /ativos/cliente/:id: visualizar ativos da conta logada (recebe id do cliente pela URL)
- GET /ativos/:id: visualizar ativos disponíveis na corretora (recebe id do ativo pela URL)
- POST /conta/deposito: deposita dinheiro em alguma conta (recebe clientId e amount pelo body)
- POST /conta/saque: saca dinheiro da conta logada (recebe amount pelo body)
- GET /conta/:id: visualiza saldo da conta logada (recebe id do cliente pela URL)

## Deploy
- https://psel-xp-lucasdvilar.herokuapp.com/

## Melhorias
- Realizar mais testes
- Documentação da API com Swager