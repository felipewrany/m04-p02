import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { SeguidoresModule } from './seguidores/seguidores.module';
import { SeguindoModule } from './seguindo/seguindo.module';
import { TweetsModule } from './tweets/tweets.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UsuariosModule,
    SeguidoresModule,
    SeguindoModule,
    TweetsModule,
    PrismaModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
