export class LoginDto {
    id: number;
    nome: string;
    senha: string;
    imagem: string;
    bio: string;
    nascimento: string | Date;
    criado_em: string | Date;
    modificado_em: string | Date;

}