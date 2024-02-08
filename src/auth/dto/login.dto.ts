import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MinLength, IsEmail } from "class-validator";

export class LoginDto {
	@IsEmail()
	@IsNotEmpty()
	@ApiProperty()
	email:string

	@IsString()
	@IsNotEmpty()
	@MinLength(3)
	@ApiProperty()
	password:string
}
