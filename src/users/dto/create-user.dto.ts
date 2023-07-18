import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'Nome utilizado para ser exibido dados do perfil',
    example: 'Luís Antônio',
  })
  name: string;

  @ApiProperty({
    description: 'Email utilizado para login',
    example: 'luisantonio@gmail.com',
  })
  email: string;

  @ApiProperty({
    description: 'senha utilizado para login',
    example: '123456',
  })
  password: string;
}
