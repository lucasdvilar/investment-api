import { Pool } from "mysql2/promise";
import { IClient, IDbClient } from "../interfaces/IClient";

class ClientModel {
  constructor(private connection: Pool) {}

  public getByUsernameAndPw = async (client: IClient): Promise<IDbClient> => {
    const { username, password } = client;
    const query = 'SELECT * FROM clients WHERE username = ? AND `password` = ?;';
    const [rows] = await this.connection.execute(query, [username, password]);
    const [clientInfo] = rows as IDbClient[];
    return clientInfo;
  }

  public getById = async (id: number): Promise<IDbClient> => {
    const [rows] = await this.connection.execute('SELECT * FROM clients WHERE id = ?;', [id]);
    const [clientInfo] = rows as IDbClient[];
    return clientInfo;
  }

  public update = async (id: number, balance: number) => {
    await this.connection.execute('UPDATE clients SET balance = ? WHERE id = ?;', [balance, id]);
  }
}

export default ClientModel;
