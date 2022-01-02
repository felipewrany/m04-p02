import { Prisma } from "@prisma/client";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateUsuarioDto implements Prisma.UsuarioUncheckedCreateInput {
    id?: number;

    @IsString()
    @IsNotEmpty()
    nome: string;

    @IsString()
    @IsNotEmpty()
    senha: string;

    @IsString()
    @IsNotEmpty()
    imagem: string;

    @IsString()
    @IsNotEmpty()
    bio: string;

  
    @IsNotEmpty()
    nascimento: string | Date;

    criado_em: string | Date;

    modificado_em: string | Date;

    seguidores?: Prisma.SeguidoresUncheckedCreateNestedManyWithoutUsuarioInput;

    seguindo?: Prisma.SeguindoUncheckedCreateNestedManyWithoutUsuarioInput;
    
    tweet?: Prisma.TweetUncheckedCreateNestedManyWithoutUsuarioInput;

}
