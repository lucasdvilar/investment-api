import HttpException from "../helpers/HttpException";
import Jwt from "../helpers/Jwt";
import { IClient, ICliente } from "../interfaces/IClient";
import IDeposit from '../interfaces/IDeposit';
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

  public deposit = async (clientId: number, amount: number): Promise<IDeposit> => {
    const client = await this.model.getById(clientId);
    const newBalance = client.balance + amount;
    await this.model.update(clientId, newBalance);
    return { codCliente: clientId, valor: amount };
  }

  public withdrawal = async (clientId: number, amount: number) => {
    const client = await this.model.getById(clientId);
    if (client.balance < amount) {
      throw new HttpException(422, 'Quantidade a ser sacada não poderá ser maior que o saldo da conta');
    }
    const newBalance = client.balance - amount;
    await this.model.update(clientId, newBalance);
    return { codCliente: clientId, valor: amount };
  }

  public getById = async (id: number): Promise<ICliente> => {
    const client = await this.model.getById(id);
    return { codCliente: client.id, saldo: client.balance };
  }
}

export default ClientService;
