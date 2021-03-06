import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Usuario } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { JwtPayload } from 'src/auth/jwt.strategy';

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.UsuarioCreateInput): Promise<Usuario> {
    data.senha = await bcrypt.hash(data.senha,10);
    return await this.prisma.usuario.create({ data });
  }

  async findByLogin(login: CreateUsuarioDto): Promise<Usuario> {
    const user = await this.prisma.usuario.findFirst({
      where: {
        nome: login.nome,
      }
    })
    if(!user) {
      throw new HttpException('Usuário não encontrado!',HttpStatus.NOT_FOUND);
    }

    const comparaSenha = await bcrypt.compare(login.senha, user.senha);

    if (!comparaSenha) {
      throw new HttpException('Senha incorreta!', HttpStatus.UNAUTHORIZED);
    }

    return user;
  }

  async findAll(): Promise<Usuario[]> {
    return await this.prisma.usuario.findMany();   
  }

  async findOne(id: number): Promise<Usuario> {
    return await this.prisma.usuario.findUnique(
      { where: { id } }
    );
  }

  async update(id: number, data: UpdateUsuarioDto): Promise<Usuario> {
    return await this.prisma.usuario.update(
      { data, where: { id }}
    );
  }

  async remove(id: number): Promise<Usuario> {
    return await this.prisma.usuario.delete({ where: { id } });
  }

  
  //validação de usuario
  async validateUser(payload: JwtPayload): Promise<Usuario> {
    const user = await this.prisma.usuario.findFirst({
      where: {
        nome: payload.nome, 
      }
    })

    if(!user) {
      throw new HttpException('Token inválido!', HttpStatus.UNAUTHORIZED);
    }

    return user;
  }
}
