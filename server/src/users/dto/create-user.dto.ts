import { IsString, IsOptional } from 'class-validator';

export class CreateUserDto {
	@IsString()
	email: string;

	@IsOptional()
	@IsString()
	name: string;

	@IsOptional()
	@IsString()
	phone: string;
}
