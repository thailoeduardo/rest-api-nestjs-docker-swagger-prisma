import { Body, Injectable, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  // Agora definimos o serviço como uma propriedade privada da classe. 
  // This will allow us to access the from within the class. 
  // So now we use the service to perform the CRUD
  constructor(private readonly prisma:PrismaService){}

  create(createUserDto: CreateUserDto) {
    return this.prisma.users.create({ 
      data: createUserDto 
    });
  }

  findAll() {
    return this.prisma.users.findMany();
  }

  findOne(id: number) {
    return this.prisma.users.findUnique({
      where:{id}
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.users.update({
      where: {id},
      data: updateUserDto,
    })
  }

  async remove(id: number) {
    return await this.prisma.users.delete({
      where: {id}
    })
  }
}
