import { Injectable } from '@nestjs/common';
import { Prisma, Seguidores } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSeguidoreDto } from './dto/create-seguidore.dto';
import { UpdateSeguidoreDto } from './dto/update-seguidore.dto';

@Injectable()
export class SeguidoresService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.SeguidoresCreateInput): Promise<Seguidores> {
    return await this.prisma.seguidores.create({ data });
  }

  async findAll(): Promise<Seguidores[]> {
    return await this.prisma.seguidores.findMany();
  }

  async findOne(id: number): Promise<Seguidores> {
    return await this.prisma.seguidores.findUnique({ where: {id} })
  }

  async update(id: number, data: UpdateSeguidoreDto): Promise<Seguidores> {
    return await this.prisma.seguidores.update(
      { data, where: { id } }
    );
  }

  async remove(id: number): Promise<Seguidores> {
    return await this.prisma.seguidores.delete({ where: {id} });
  }
}