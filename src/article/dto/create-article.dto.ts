import { ApiProperty } from "@nestjs/swagger";
import { 
	IsNotEmpty,
	IsString, 
	IsOptional,
	MaxLength,
	IsEmail,
	IsBoolean,
	IsNumber
} from 'class-validator';

export class CreateArticleDto {
	@IsString()
	@IsNotEmpty()
  @ApiProperty()
  title: string;

	@IsString()
  @ApiProperty()
  description: string;
  
	@IsString()
	@ApiProperty()
  body: string;

	@IsBoolean()
  @ApiProperty()
  published: boolean;

	@ApiProperty()
  createdAt: Date;

	@ApiProperty()
  updatedAt: Date;

	@IsNumber()
  @ApiProperty()
	authorId: number
}
