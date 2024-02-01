import { ApiProperty } from '@nestjs/swagger';
import { 
	IsBoolean,
	IsNotEmpty,
	IsString, 
	IsOptional,
	MaxLength,
	MinLength,
	IsEmail,
} from 'class-validator';

export class CreateUserDto {
	@IsString()
	@IsNotEmpty()
	@MinLength(5)
	@IsEmail()
	@ApiProperty()
	email: string;

	@IsOptional()
	@IsString()
	@ApiProperty({ required: false })
	name: string;

	@IsString()
  @IsOptional()
  @IsNotEmpty()
  @MaxLength(12)
  @ApiProperty({ required: false })
	phone?: string;
}
