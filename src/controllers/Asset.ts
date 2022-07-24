import { Request, Response } from "express"
import AssetService from "../services/Asset"

class AssetController {
  constructor(private assetService: AssetService = new AssetService()) {}

  public getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const asset = await this.assetService.getById(Number(id));
    res.status(200).json(asset);
  }
}

export default AssetController;
