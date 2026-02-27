# SISTEMA DE CADASTRO DE USUÁRIOS

## Aplicação Web com Spring Boot

------------------------------------------------------------------------

## 1. Introdução

Este projeto consiste no desenvolvimento de uma API REST para cadastro e
gerenciamento de usuários, utilizando o framework Spring Boot. A
aplicação integra backend e frontend em uma única estrutura, permitindo
operações completas de criação, listagem, busca e exclusão de usuários.

O objetivo principal é demonstrar a aplicação prática dos conceitos de:

-   Arquitetura em camadas
-   Desenvolvimento de APIs REST
-   Persistência de dados com JPA/Hibernate
-   Integração entre frontend e backend

------------------------------------------------------------------------

## 2. Tecnologias Utilizadas

-   Java 21
-   Spring Boot 3
-   Spring Data JPA
-   Hibernate
-   Banco de Dados H2 (em memória)
-   Lombok
-   HTML, CSS e JavaScript

------------------------------------------------------------------------

## 3. Arquitetura do Sistema

A aplicação segue o padrão de arquitetura em camadas:

Controller → Service → Repository → Database

### 3.1 Controller

Responsável por receber e responder requisições HTTP.

### 3.2 Service

Contém as regras de negócio da aplicação.

### 3.3 Repository

Realiza a comunicação com o banco de dados utilizando Spring Data JPA.

### 3.4 Model

Representa a entidade persistida no banco de dados.

------------------------------------------------------------------------

## 4. Estrutura do Projeto

src/main/java/org/example/usuarios

-   controller
-   service
-   repository
-   model
-   UsuariosApplication.java

src/main/resources

-   application.properties
-   static/
    -   index.html
    -   css/style.css
    -   js/script.js

------------------------------------------------------------------------

## 5. Modelagem da Entidade Usuario

A entidade Usuario possui os seguintes atributos:

  Atributo    Tipo            Descrição
  ----------- --------------- -------------------------------------
  id          Long            Identificador único
  nome        String          Nome do usuário
  email       String          Email único
  senha       String          Senha (armazenada sem criptografia)
  idade       Integer         Idade do usuário
  isActive    Boolean         Indica se o usuário está ativo
  createdAt   LocalDateTime   Data de criação
  updatedAt   LocalDateTime   Data de atualização

Os campos createdAt e updatedAt são gerenciados automaticamente através
de métodos anotados com @PrePersist e @PreUpdate.

------------------------------------------------------------------------

## 6. Endpoints da API

Base URL: http://localhost:8080/usuarios

### 6.1 Criar Usuário

POST /usuarios

Exemplo de corpo da requisição:
```
{
"nome": "João",
"email": "joao@email.com",
"senha": "123456",
"idade": 25
}

```

### 6.2 Listar Usuários

GET /usuarios

### 6.3 Buscar Usuário por ID

GET /usuarios/{id}

### 6.4 Deletar Usuário

DELETE /usuarios/{id}

------------------------------------------------------------------------

## 7. Banco de Dados

A aplicação utiliza o banco H2 em memória.

Configurações principais:

spring.datasource.url=jdbc:h2:mem:usuariosdb\
spring.jpa.hibernate.ddl-auto=update\
spring.h2.console.enabled=true

Console H2 disponível em: http://localhost:8080/h2-console

------------------------------------------------------------------------

## 8. Frontend

O frontend está localizado na pasta static e realiza requisições HTTP
utilizando fetch(). Ele permite:

-   Cadastro de usuários
-   Listagem dinâmica
-   Exibição de mensagens de sucesso e erro

------------------------------------------------------------------------

## 9. Execução do Projeto

1.  Clonar o repositório
2.  Executar o comando:

`mvn spring-boot:run`

3.  Acessar no navegador:

Frontend: http://localhost:8080

API: http://localhost:8080/usuarios
