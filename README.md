
# Desafio NDM

Desafio do processo seletivo NDM. Consistem numa API REST para cadastro de times e de jogadores


## Instalação

Instale o projeto com yarn

```bash
  yarn
  cd teste-ndm
```

Com as variáveis de ambiente configuradas, rode o comando seed para o Banco de dados. Esse comando é importante para a autenticação dentro da aplicação.

```bash
  yarn seed
```

Feito isso, inicie a aplicação:

```bash
  yarn start
```

Você pode acessar a interface do prisma studio, para observar os dados executando num outro terminal:

```bash
  npx prisma studio
```
    
## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`DATABASE_URL` => Siga o modelo abaixo, para usar o Postgres localmente:

    postgresql://<user>:<password>@localhost:5432/<database>

`JWT_SECRET` => Qualquer senha


## Apêndice

Após iniciar a aplicação, você pode conferir a documentação da API feita com Swagger no endpoint "/api"

Se estiver rodando localmente:
    [acessar documentação](http://localhost:3000/api)

Para acessar os endpoints, é preciso realizar login dentro da aplicação.


## Stacks utilizadas

**Front-end:** React, Typescript

**Back-end:** Node, NestJS, Typescript

**BD:** PostgreSQL


## Autores

- [@darcanj0](https://www.github.com/darcanj0)

