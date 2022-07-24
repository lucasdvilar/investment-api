import { Request, Response } from "express";
import ClientAssetService from "../services/ClientAsset";

class ClientAssetController {
  constructor(private clientAssetService: ClientAssetService = new ClientAssetService()) {}

  public purchase = async (req: Request, res: Response) => {
    const { codCliente, codAtivo, qtdeAtivo } = req.body;
    await this.clientAssetService.purchase(codCliente, codAtivo, qtdeAtivo);
    res.status(201).end();
  }

  public sale = async (req: Request, res: Response) => {
    const { codCliente, codAtivo, qtdeAtivo } = req.body;
    await this.clientAssetService.sale(codCliente, codAtivo, qtdeAtivo);
    res.status(201).end();
  }
}

export default ClientAssetController;
