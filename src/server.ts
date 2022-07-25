import dotenv from 'dotenv';
import app from "./app";

dotenv.config();

const PORT = process.env.PORT;

app.get('/', (_req, res) => {
  res.status(200).send(`
    Documentação da API:
    - POST investimentos/comprar: comprar ativos na conta logada (recebe assetId e quantity pelo body)
    - POST investimento/vender: vender ativos na conta logada (recebe assetId e quantity pelo body)
    - GET ativos/cliente/:id: visualizar ativos da conta logada (recebe id do cliente pela URL)
    - GET ativos/:id: visualizar ativos disponíveis na corretora (recebe id do ativo pela URL)
    - POST conta/deposito: deposita dinheiro em alguma conta (recebe clientId e amount pelo body)
    - POST conta/saque: saca dinheiro da conta logada (recebe amount pelo body)
    - GET conta/:id: visualiza saldo da conta logada (recebe id do cliente pela URL)
  `);
})

app.listen(PORT, () => console.log(`Running on ${PORT}`)
);
