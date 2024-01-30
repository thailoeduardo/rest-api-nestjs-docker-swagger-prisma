import { Body, Injectable, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  // Agora definimos o serviço como uma propriedade privada da classe. 
  // This will allow us to access the from within the class. 
  // So now we use the service to perform the CRUD
  constructor(private readonly prisma:PrismaService){};

  create(createUserDto: CreateUserDto) {
    return this.prisma.users.create({
      data: createUserDto,
    });

    // return this.prisma.users.create({
    //   data: createRecipeDto,
    // });
    // return 'This action adds a new user';
  }

  findAll() {
    return this.prisma.users.findMany();
    // return `This action returns all users`;
  }

  findOne(id: number) {
    return this.prisma.users.findUnique({
      where:{id}
    });

    // return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.users.update({
      where: {id},
      data: updateUserDto,
    })

    // return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    return await this.prisma.users.delete({
      where: {id}
    })

    // return `This action removes a #${id} user`;
  }
}
