import { Pool } from "mysql2/promise";
import IAsset from "../interfaces/IAsset";

class AssetModel {
  constructor(public connection: Pool) {}
  
  public getById = async (id: number): Promise<IAsset> => {
    const [rows] = await this.connection.execute('SELECT * FROM assets WHERE id = ?;', [id]);
    const [asset] = rows as IAsset[];
    return asset;
  }
}

export default AssetModel;
