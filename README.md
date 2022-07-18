<p align="center">
    <img src="https://neofeed.com.br/wp-content/uploads/2021/08/LOGOXP-696x392.jpg" height="30" width="50" alt="Logo da XP">
    <img src="https://www.integracaodaserra.com.br/wp-content/uploads/2021/09/9814df697eaf49815d7df109110815ff887b3457.png" height="30" width="50" alt="Logo da Trybe">
</p>

# Desafio de Back-end - PSel XP/Trybe

## Descrição
- O desafio apresenta uma aplicação de investimento em ações com algumas funcionalidades de conta digital.

## Funcionalidades

## Decisões
- O README está em português, já que a XP é uma empresa brasileira, e não sei se o repositório poderá ficar no ar após o processo seletivo. O código e os commits estão em inglês.
- O projeto foi desenvolvido em TypeScript para garantir a tipagem estática e forte, promovendo um código mais seguro e mais fácil de refatorar (além do autocomplete :sweat_smile:)
- Decidi não utilizar ORM para demonstrar o domínio na criação direta de tabelas no MySQL e no uso das queries
- Decidi não usar TDD, pois priorizei os requisitos mínimos na fase de levantamento (testes unitários são requisitos adicionais)
- Usei ESLint para padronizar o código -> maior legibilidade e facilita a identificação de erros/problemas durante o desenvolvimento

## Como rodar
1. Clone o repositório
- SSH: `git clone git@github.com:lucasdvilar/psel-xp.git`
- HTTPS: `git clone https://github.com/lucasdvilar/psel-xp.git`

2. Instale as dependências
- `npm install`

3. Opcões de execução/compilação
- Para executar: `npm start`
- Para executar em modo de desenvolvimento: `npm run dev`
- Para compilar: `npm run build`