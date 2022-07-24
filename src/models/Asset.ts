import { Pool } from "mysql2/promise";
import IAsset from "../interfaces/IAsset";

class AssetModel {
  constructor(public connection: Pool) {}
  
  public getById = async (id: number): Promise<IAsset> => {
    const [rows] = await this.connection.execute('SELECT * FROM assets WHERE id = ?;', [id]);
    const [asset] = rows as IAsset[];
    return asset;
  }

  public update = async (id: number, quantity: number) => {
    const query = 'UPDATE assets SET quantity = ? WHERE id = ?;';
    await this.connection.execute(query, [quantity, id]);
  }
}

export default AssetModel;
