import jwt, { SignOptions } from 'jsonwebtoken';
import { IDbClient } from '../interfaces/IClient';
import HttpException from './HttpException';

class Jwt {
  private SECRET: string = process.env.SECRET || 'secret';

  private jwtConfig: SignOptions = {
    expiresIn: '1h',
    algorithm: 'HS256',
  }

  public generateToken = (client: IDbClient) => jwt.sign(client, this.SECRET, this.jwtConfig);

  public authenticateToken = (token: string) => {
    try {
      const decoded = jwt.verify(token, this.SECRET);
      return decoded;
    } catch (error) {
      throw new HttpException(401, 'Invalid token');
    }
  }
}

export default Jwt;
