import HttpException from "../helpers/HttpException";
import AssetModel from "../models/Asset";
import ClientModel from "../models/Client";
import ClientAssetModel from "../models/ClientAsset";
import connection from "../models/connection";

class ClientAssetService {
  private ClientModel: ClientModel;
  private AssetModel: AssetModel;
  private ClientAssetModel: ClientAssetModel;

  constructor() {
    this.ClientModel = new ClientModel(connection);
    this.AssetModel = new AssetModel(connection);
    this.ClientAssetModel = new ClientAssetModel(connection);
  }

  private validatePurchase = async (clientId: number, assetId: number, quantity: number) => {
    const clientInfo = await this.ClientModel.getById(clientId);
    const asset = await this.AssetModel.getById(assetId);
    const total = asset.price * quantity;
    if (clientInfo.balance < total) throw new HttpException(422, 'You need more money!');
    if (asset.quantity < quantity) {
      throw new HttpException(422, 'Quantidade de ativo a ser comprada não pode ser maior que a quantidade disponível na corretora');
    }
  }

  private checkPurchases = async (clientId: number, assetId: number, quantity: number) => {
    const purchase = await this.ClientAssetModel.getByIds(clientId, assetId);
    if (purchase) {
      const newQtt = purchase.quantity + quantity;
      return this.ClientAssetModel.update(clientId, assetId, newQtt);
    } else {
      return this.ClientAssetModel.create(clientId, assetId, quantity);
    }
  }

  private updateBalance = async (clientId: number, assetId: number, quantity: number) => {
    const client = await this.ClientModel.getById(clientId);
    const asset = await this.AssetModel.getById(assetId);
    const newBalanceQtt = client.balance - asset.price * quantity;
    return this.ClientModel.update(clientId, newBalanceQtt);
  }

  private updateAsset = async (assetId: number, quantity: number) => {
    const asset = await this.AssetModel.getById(assetId);
    const newAssetQtt = asset.quantity - quantity;
    return this.AssetModel.update(assetId, newAssetQtt);
  }

  public purchase = async (clientId: number, assetId: number, quantity: number) => {
    await this.validatePurchase(clientId, assetId, quantity);
    const updatedBalance = this.updateBalance(clientId, assetId, quantity);
    const updatedAssetQtt = this.updateAsset(assetId, quantity);
    const createOrUpdate = this.checkPurchases(clientId, assetId, quantity);
    await Promise.all([updatedBalance, updatedAssetQtt, createOrUpdate]);
  }
}

export default ClientAssetService;
