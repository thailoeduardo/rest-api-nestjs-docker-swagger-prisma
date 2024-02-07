// export class User {}
import { Users } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class UsersEntity implements Users {
  @ApiProperty()
  id: number;

  @ApiProperty()
  email: string;

  @ApiProperty()
  name: string | null;

  @ApiProperty({ required: false, nullable: true })
  phone: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  password: string;
  
  @ApiProperty({ required: false, nullable: true })
  article: []
}