import { Request, Response } from 'express';
import ClientAssetService from '../services/ClientAsset';

class ClientAssetController {
  constructor(private clientAssetService: ClientAssetService = new ClientAssetService()) {}

  public purchase = async (req: Request, res: Response) => {
    const { assetId, quantity } = req.body;
    const { clientId } = res.locals;
    const purchase = await this.clientAssetService.purchase({ clientId, assetId, quantity });
    res.status(201).json(purchase);
  }

  public sale = async (req: Request, res: Response) => {
    const { assetId, quantity } = req.body;
    const { clientId } = res.locals;
    const sale = await this.clientAssetService.sale({ clientId, assetId, quantity });
    res.status(201).json(sale);
  }

  public getByClientId = async (req: Request, res: Response) => {
    const { id } = req.params;
    const clientAssets = await this.clientAssetService.getByClientId(Number(id));
    res.status(200).json(clientAssets);
  }
}

export default ClientAssetController;
