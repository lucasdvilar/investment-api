import HttpException from "../helpers/HttpException";
import Jwt from "../helpers/Jwt";
import { IClient } from "../interfaces/IClient";
import ClientModel from "../models/Client";
import connection from "../models/connection";

class ClientService {
  private model: ClientModel;

  constructor() {
    this.model = new ClientModel(connection);
  }

  public login = async (client: IClient): Promise<string> => {
    const clientInfo = await this.model.getByUsernameAndPw(client);
    if (!clientInfo) throw new HttpException(401, 'Invalid username or password');
    return new Jwt().generateToken(clientInfo);
  }
}

export default ClientService;
