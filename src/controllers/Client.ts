import { Request, Response } from "express";
import ClientService from "../services/Client";

class ClientController {
  private clientService: ClientService;

  constructor() {
    this.clientService = new ClientService();
  }

  public login = async (req: Request, res: Response) => {
    const client = req.body;
    const token = await this.clientService.login(client);
    res.status(200).json({ token });
  }

  public deposit = async (req: Request, res: Response) => {
    const { clientId, amount } = req.body;
    const deposit = await this.clientService.deposit(clientId, amount);
    res.status(201).json(deposit);
  }
}

export default ClientController;
