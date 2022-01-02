import { Module } from '@nestjs/common';
import { SeguidoresService } from './seguidores.service';
import { SeguidoresController } from './seguidores.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  controllers: [SeguidoresController],
  providers: [SeguidoresService, PrismaService],
  exports: [SeguidoresService],
})
export class SeguidoresModule {}
