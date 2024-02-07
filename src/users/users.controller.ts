import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Patch, 
  Param, 
  Delete,
  ParseIntPipe,
  NotFoundException
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UsersEntity } from './entities/user.entity';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiCreatedResponse({ type: UsersEntity })
  async create(@Body() createUserDto: CreateUserDto) {
    return new UsersEntity(await this.usersService.create(createUserDto));
  }

  @Get()
  @ApiOkResponse({ type: UsersEntity, isArray: true })
  async findAll() {
    const users = await this.usersService.findAll();
    return users.map((user) => new UsersEntity(user));
  }

  @Get(':id')
  @ApiOkResponse({ type: UsersEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const user = new UsersEntity(await this.usersService.findOne(id));
    if(!user) {
      throw new NotFoundException(`user ${id} does not exist.`)
    }

    return user;
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: UsersEntity })
  async update(
    @Param('id', ParseIntPipe) id: number, 
    @Body() updateUserDto: UpdateUserDto
  ) {
    return new UsersEntity(await this.usersService.update(id, updateUserDto));
  }

  @Delete(':id')
  @ApiOkResponse({ type: UsersEntity })
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new UsersEntity(await this.usersService.remove(id));
  }
}
