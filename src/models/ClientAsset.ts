import { Pool } from "mysql2/promise";

class ClientAssetModel {
  constructor(public connection: Pool) {}

  public create = async (client_id: number, asset_id: number, quantity: number) => {
    const query = 'INSERT INTO clients_assets (client_id, asset_id, quantity) VALUES (?, ?, ?);'
    await this.connection.execute(query, [client_id, asset_id, quantity]);
  }

  public update = async (client_id: number, asset_id: number, quantity: number) => {
    const query = 'UPDATE clients_assets SET quantity = ? WHERE client_id = ? AND asset_id = ?;'
    await this.connection.execute(query, [quantity, client_id, asset_id]);
  }
}

export default ClientAssetModel;
