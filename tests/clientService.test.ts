import ClientModel from "../src/models/Client";
import connection from "../src/models/connection";
import ClientService from "../src/services/Client";

describe('ClientService', () => {
  it('Testa getById', async () => {
    const clientModel = new ClientModel(connection);
    const clientService = new ClientService();

    clientModel.getById = jest.fn().mockResolvedValue([[{
      id: 1,
      username: 'lucasdvilar',
      password: 'senha123',
      balance: 10,
    }]]);

    clientService.getById = jest.fn().mockResolvedValue({ codCliente: 1, saldo: 10 });

    const response = await clientService.getById(1);
    
    expect(response).toStrictEqual({ codCliente: 1, saldo: 10 });
  });
});