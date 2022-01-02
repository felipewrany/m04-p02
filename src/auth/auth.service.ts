import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { LoginDto } from './dto/login.dto';
import { JwtPayload } from './jwt.strategy';


@Injectable()
export class AuthService {
    constructor(
        private usuarioService: UsuariosService,
        private jwtService: JwtService
    ) {}

    async login(data: LoginDto) {
        const usuario = await this.usuarioService.findByLogin(data);
        if(!usuario) {
            throw new HttpException("Usuário não encontrado!", HttpStatus.NOT_FOUND);
        }

        const token = this._createToken(usuario);
        return { nome: usuario.nome, ...token }
    }

    private _createToken({ nome }: LoginDto) {
        const payload: JwtPayload = { nome }
        const accessToken = this.jwtService.sign(payload);
        return {
            expiresIn: process.env.EXPIRESIN,
            accessToken
        }
    }
}