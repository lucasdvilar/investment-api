import HttpException from "../helpers/HttpException";
import { IAtivo } from "../interfaces/IAsset";
import AssetModel from "../models/Asset";
import connection from "../models/connection";

class AssetService {
  constructor(private assetModel: AssetModel = new AssetModel(connection)) {}
  
  public getById = async (id: number): Promise<IAtivo> => {
    const asset = await this.assetModel.getById(id);
    if (!asset) throw new HttpException(422, 'Unavailable asset code');
    return { codAtivo: asset.id, qtdeAtivo: asset.quantity, valor: asset.price };
  }
}

export default AssetService;
