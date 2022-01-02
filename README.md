Projeto Rede Social (M04P02)

Este projeto é uma API desenvolvida utilizando NestJS com integração com um banco de dados PostgreSQL através do Prisma.

A API possue 5 rotas principais sendo elas:

# USUARIOS(/usuarios)
Dentro desta rota é possível:
-Criação de um novo usuário utilizando o verbo [POST] e enviando os dados do usuário seguindo esse padrão em formato JSON:
{
  "nome": string,
  "senha": string,
  "imagem": string,
  "bio": string,
  "nascimento": string | Date,
}
-Listar todos os usuários utilizando o verbo [GET].
-Listar um usuário utilizando o verbo [GET] e o [id] do usuário na rota (usuarios/id).
-Atualizar um usuário utilizando o verbo [PATCH], o [id] do usuário na rota (usuarios/id) e enviando os dados atualizados do usuário seguindo esse padrão em formato JSON:
{
  "nome": string,
  "senha": string,
  "imagem": string,
  "bio": string,
  "nascimento": string | Date,
}
-Apagar um usuário utilizando o verbo [DELETE] e o [id] do usuário na rota (usuarios/id).

# SEGUIDORES(/seguidores)
Dentro desta rota é possível:
-Criação de um novo seguidor utilizando o verbo [POST] e enviando os dados do seguidor seguindo esse padrão em formato JSON:
{
  "idSeguidor": number  
}
-Listar todos os seguidores utilizando o verbo [GET].
-Listar um seguidor utilizando o verbo [GET] e o [id] do seguidor na rota (seguidores/id).
-Atualizar um seguidor utilizando o verbo [PATCH], o [id] do seguidor na rota (seguidores/id) e enviando os dados atualizados do seguidor seguindo esse padrão em formato JSON:
{
  "idSeguidor": number  
}
-Apagar um seguidor utilizando o verbo [DELETE] e o [id] do seguidor na rota (seguidores/id).

# SEGUINDO(/seguindo)
Dentro desta rota é possível:
-Criação de uma nova pessoa seguida utilizando o verbo [POST] e enviando os dados do pessoa seguindo esse padrão em formato JSON:
{
  "idSeguindo": number
}
-Listar todos as pessoas que são seguidas utilizando o verbo [GET].
-Listar uma pessoa seguida utilizando o verbo [GET] e o [id] da pessoa na rota (seguindo/id).
-Atualizar uma pessoa seguida utilizando o verbo [PATCH], o [id] da pessoa na rota (seguindo/id) e enviando os dados atualizados da pessoa seguida seguindo esse padrão em formato JSON:
{
  "idSeguindo": number
}
-Apagar uma pessoa seguida utilizando o verbo [DELETE] e o [id] da pessoa seguida na rota (seguindo/id).

# TWEETS(/tweets)
Dentro desta rota é possível:
-Criação de um novo tweet utilizando o verbo [POST] e enviando o tweet seguindo esse padrão em formato JSON:
{
  "texto": string,
  "emoji": string,
  "curtidas": number,
  "usuarioId": number
}
-Listar todos os tweets utilizando o verbo [GET].
-Listar um tweet utilizando o verbo [GET] e o [id] do tweet na rota (tweets/id).
-Atualizar um tweet utilizando o verbo [PATCH], o [id] do tweet na rota (tweets/id) e enviando o tweet atualizado seguindo esse padrão em formato JSON:
{
  "texto": string,
  "emoji": string,
  "curtidas": number,
  "usuarioId": number
}
-Apagar um tweet utilizando o verbo [DELETE] e o [id] do tweet na rota (tweets/id).

# AUTH(/auth)
Dentro dessa rota é possível:
-Requisitar um token utilizando o verbo [POST] e enviando os dados do usuário seguindo esse padrão em formato JSON:
{
  "nome":  string,
  "senha": string
}
-Realizar a autenticação do token recebido utilizando o verbo [GET] e enviando o token no campo de autorização.