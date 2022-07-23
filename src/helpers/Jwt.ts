import jwt, { SignOptions } from 'jsonwebtoken';
import IUser from '../interfaces/IUser';
import HttpException from './HttpException';

class Jwt {
  private SECRET: string = process.env.SECRET || 'secret';

  private jwtConfig: SignOptions = {
    expiresIn: '1h',
    algorithm: 'HS256',
  }

  public generateToken = (user: IUser) => jwt.sign(user, this.SECRET, this.jwtConfig);

  public authenticateToken = (token: string) => {
    if (!token) throw new HttpException(401, 'Token not found');
    try {
      const decoded = jwt.verify(token, this.SECRET);
      return decoded;
    } catch (error) {
      throw new HttpException(401, 'Invalid token');
    }
  }
}

export default Jwt;
