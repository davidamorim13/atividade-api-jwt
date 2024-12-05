import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './auth.dto';
import { UnauthorizedException } from '@nestjs/common';

export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const validUsername = 'user';
    const validPassword = 'password';

    if (username === validUsername && password === validPassword) {
      return { userId: 1, username };
    }
    return null;
  }

  async login(authDto: AuthDto): Promise<{ access_token: string }> {
    const user = await this.validateUser(authDto.username, authDto.password);

    if (!user) {
      throw new UnauthorizedException(' Credencias Invalidas');
    }

    const payload = { username: user.username, sub: user.userId };
    const access_token = this.jwtService.sign(payload)
    return { access_token };

    
  }
}
