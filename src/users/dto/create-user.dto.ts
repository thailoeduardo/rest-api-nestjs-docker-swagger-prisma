import { ApiProperty } from '@nestjs/swagger';
import { 
	IsNotEmpty,
	IsString, 
	IsOptional,
	MaxLength,
	IsEmail,
	MinLength
} from 'class-validator';

export class CreateUserDto {
	@IsString()
	@IsNotEmpty()
	@IsEmail()
	@ApiProperty()
	email: string;

	@IsOptional()
	@IsString()
	@ApiProperty()
	name: string;

	@IsString()
  @IsOptional()
  @IsNotEmpty()
  @MaxLength(12)
  @ApiProperty()
	phone?: string;

	@IsString()
  @IsNotEmpty()
  @MinLength(6)
  @ApiProperty()
  password: string;
}
