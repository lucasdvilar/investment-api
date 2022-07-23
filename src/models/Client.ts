import { Pool } from "mysql2/promise";
import { IClient, IDbClient } from "../interfaces/IClient";

class ClientModel {
  constructor(public connection: Pool) {}

  public getByUsernameAndPw = async (client: IClient): Promise<IDbClient> => {
    const { username, password } = client;
    const query = 'SELECT * FROM clients WHERE username = ? AND `password` = ?;';
    const [rows] = await this.connection.execute(query, [username, password]);
    const [clientInfo] = rows as IDbClient[];
    return clientInfo;
  }
}

export default ClientModel;
