import ClientModel from '../src/models/Client';
import connection from '../src/models/connection';

describe('ClientModel', () => {
  it('Testa getById', async () => {
    connection.execute = jest.fn().mockResolvedValue([[{
      id: 1,
      username: 'lucasdvilar',
      password: 'senha123',
      balance: 10,
    }]]);

    const response = await new ClientModel(connection).getById(1);
    expect(response).toStrictEqual({
      id: 1,
      username: 'lucasdvilar',
      password: 'senha123',
      balance: 10,
    });
  });
});
