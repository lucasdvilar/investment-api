import { Pool } from "mysql2/promise";
import { IUser, IDbUser } from "../interfaces/IUser";

class ClientModel {
  constructor(public connection: Pool) {}

  public getByUsernameAndPw = async (user: IUser) => {
    const { username, password } = user;
    const query = 'SELECT * FROM clients WHERE username = ? AND password = ?';
    const [rows] = await this.connection.execute(query, [username, password]);
    const [clientInfo] = rows as IDbUser[];
    return clientInfo;
  }
}

export default ClientModel;
