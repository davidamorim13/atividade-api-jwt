import { IsString, IsNotEmpty } from 'class-validator';

export class AuthDto {
  
  @IsString({ message: 'Obrigatorio' })
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
