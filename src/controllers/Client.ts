import { Request, Response } from "express";
import ClientService from "../services/Client";

class ClientController {
  private clientService: ClientService;

  constructor() {
    this.clientService = new ClientService();
  }

  public login = async (req: Request, res: Response) => {
    const user = req.body;
    const token = await this.clientService.login(user);
    res.status(200).json({ token });
  }
}

export default ClientController;
