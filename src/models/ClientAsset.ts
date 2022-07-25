import { Pool } from 'mysql2/promise';
import IClientAsset from '../interfaces/IClientAsset';

class ClientAssetModel {
  constructor(private connection: Pool) {}

  public create = async (client_id: number, asset_id: number, quantity: number) => {
    const query = 'INSERT INTO clients_assets (client_id, asset_id, quantity) VALUES (?, ?, ?);';
    await this.connection.execute(query, [client_id, asset_id, quantity]);
  }

  public update = async (client_id: number, asset_id: number, quantity: number) => {
    const query = 'UPDATE clients_assets SET quantity = ? WHERE client_id = ? AND asset_id = ?;';
    await this.connection.execute(query, [quantity, client_id, asset_id]);
  }

  public getByIds = async (client_id: number, asset_id: number): Promise<IClientAsset> => {
    const query = 'SELECT * FROM clients_assets WHERE client_id = ? AND asset_id = ?;';
    const [rows] = await this.connection.execute(query, [client_id, asset_id]);
    const [clientAsset] = rows as IClientAsset[];
    return clientAsset;
  }

  public delete = async (clientId: number, assetId: number) => {
    const query = 'DELETE FROM clients_assets WHERE client_id = ? AND asset_id = ?;';
    await this.connection.execute(query, [clientId, assetId]);
  }

  public getByClientId = async (clientId: number): Promise<IClientAsset[]> => {
    const query = 'SELECT * FROM clients_assets WHERE client_id = ?;';
    const [rows] = await this.connection.execute(query, [clientId]);
    const clientAssets = rows as IClientAsset[];
    return clientAssets;
  }
}

export default ClientAssetModel;
