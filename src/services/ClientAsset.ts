import HttpException from "../helpers/HttpException";
import AssetModel from "../models/Asset";
import ClientModel from "../models/Client";
import ClientAssetModel from "../models/ClientAsset";
import connection from "../models/connection";

class ClientAssetService {
  private clientModel: ClientModel;
  private assetModel: AssetModel;
  private clientAssetModel: ClientAssetModel;

  constructor() {
    this.clientModel = new ClientModel(connection);
    this.assetModel = new AssetModel(connection);
    this.clientAssetModel = new ClientAssetModel(connection);
  }

  private validatePurchase = async (clientId: number, assetId: number, quantity: number) => {
    const clientInfo = await this.clientModel.getById(clientId);
    const asset = await this.assetModel.getById(assetId);
    const total = asset.price * quantity;
    if (clientInfo.balance < total) throw new HttpException(422, 'You need more money!');
    if (asset.quantity < quantity) {
      throw new HttpException(422, 'Quantidade de ativo a ser comprada não pode ser maior que a quantidade disponível na corretora');
    }
  }

  private checkPurchases = async (clientId: number, assetId: number, quantity: number) => {
    const purchase = await this.clientAssetModel.getByIds(clientId, assetId);
    if (purchase) {
      const newQtt = purchase.quantity + quantity;
      return this.clientAssetModel.update(clientId, assetId, newQtt);
    } else {
      return this.clientAssetModel.create(clientId, assetId, quantity);
    }
  }

  private updateBalance = async (clientId: number, assetId: number, quantity: number) => {
    const client = await this.clientModel.getById(clientId);
    const asset = await this.assetModel.getById(assetId);
    const newBalanceQtt = client.balance - asset.price * quantity;
    return this.clientModel.update(clientId, newBalanceQtt);
  }

  private updateAsset = async (assetId: number, quantity: number) => {
    const asset = await this.assetModel.getById(assetId);
    const newAssetQtt = asset.quantity - quantity;
    return this.assetModel.update(assetId, newAssetQtt);
  }

  public purchase = async (clientId: number, assetId: number, quantity: number) => {
    await this.validatePurchase(clientId, assetId, quantity);
    const updatedBalance = this.updateBalance(clientId, assetId, quantity);
    const updatedAssetQtt = this.updateAsset(assetId, quantity);
    const createOrUpdate = this.checkPurchases(clientId, assetId, quantity);
    await Promise.all([updatedBalance, updatedAssetQtt, createOrUpdate]);
  }

  private validateSale = async (clientId: number, assetId: number, quantity: number) => {
    const purchase = await this.clientAssetModel.getByIds(clientId, assetId);
    if (purchase.quantity < quantity) {
      throw new HttpException(422, 'Quantidade de ativo a ser vendida não pode ser maior que a quantidade disponível na carteira');
    }
  }

  private updateWallet = async (clientId: number, assetId: number, quantity: number) => {
    const purchase = await this.clientAssetModel.getByIds(clientId, assetId);
    const newQtt = purchase.quantity - quantity;
    if (newQtt === 0) return this.clientAssetModel.delete(clientId, assetId);
    return this.clientAssetModel.update(clientId, assetId, newQtt);
  }

  private addAssetQtt = async (assetId: number, quantity: number) => {
    const asset = await this.assetModel.getById(assetId);
    const newAssetQtt = asset.quantity + quantity;
    return this.assetModel.update(assetId, newAssetQtt);
  }

  private addBalance = async (clientId: number, assetId: number, quantity: number) => {
    const client = await this.clientModel.getById(clientId);
    const asset = await this.assetModel.getById(assetId);
    const newBalanceQtt = client.balance + asset.price * quantity;
    return this.clientModel.update(clientId, newBalanceQtt);
  }

  public sale = async (clientId: number, assetId: number, quantity: number) => {
    await this.validateSale(clientId, assetId, quantity);
    const updatedWallet = this.updateWallet(clientId, assetId, quantity);
    const updatedAssetQtt = this.addAssetQtt(assetId, quantity);
    const updatedBalance = this.addBalance(clientId, assetId, quantity);
    await Promise.all([updatedWallet, updatedAssetQtt, updatedBalance]);
  }
}

export default ClientAssetService;
