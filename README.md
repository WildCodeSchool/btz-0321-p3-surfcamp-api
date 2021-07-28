----
SURFCAMP API
----
Made With love By Happy Wilders.





## Run Locally

Clone the project

```bash
  git clone https://github.com/WildCodeSchool/btz-0321-p3-surfcamp-api
```

Go to the project directory

```bash
  cd btz-0321-p3-surfcamp-api
```

Install dependencies

```bash
  npm install
```

## Docker local development

If you don't have any postgres database running on your system, you can download docker and run docker-compose to build a container with a postgres database. 
You can find the database credentials in the docker-compose.yml file here.

```bash
version: "3.1"

services:
  db:
    image: postgres:latest
    restart: always
    ports:
      - 5432:5432
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
    volumes:
      - postgres:/data/postgres

  adminer:
    image: adminer
    restart: always
    ports:
      - 8081:8080
    environment:
      ADMINER_DESIGN: mvt

volumes:
  postgres:
```

---

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL="postgresql://login:password@ip:port/databasename?schema=public"`

example in development:
`DATABASE_URL="postgresql://postgres:postgres@localhost:5432/surfcamp?schema=public"`

`TOKEN_SECRET=secretToken`

`ORIGINS=ServerWhereYouWork`

You need a postgreSQL database with at least one table to init Prisma.

You need to replace 'secretToken' by the provided secret token ;)

You need to replace 'ServerWhereYouWork' by all server that you use for work like localhost:3000 (don't forget to split the different server used by a coma and without space).

---

## RUN YOUR DATABASE BEFORE INIT

## Database ORM Init

In this secion we will init Prisma and sync the database

```bash
  $ npx prisma migrate dev
```

---

## Be careful if you already have a database with the same name all your datas will be destroyed.

Say yes when the prompt ask you if you want to reset your DB.

Now you can run the dev environment with this command :

```bash
  npm run dev
```

If nothing went wrong you should see something like this

```bash
> surfcamp-api@1.0.0 dev
> ts-node-dev --respawn --exit-child ./src/index.ts
[INFO] 21:57:37 ts-node-dev ver. 1.1.6 (using ts-node ver. 9.1.1, typescript ver. 4.3.2)
Server running on http://localhost:5000
```

---

## // API Reference. //

---

## Properties

#### Get all properties

```http
  GET /properties
```

#### Get one property

```http
  GET /properties/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

## Addresses

#### Get all addresses

```http
  GET /addresses
```

#### Get one address

```http
  GET /addresses/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

## Rooms

#### Get all rooms

```http
  GET /rooms
```

#### Get one rooms

```http
  GET /rooms/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

## Users

#### Get all users

```http
  GET /users
```

#### Get one user

```http
  GET /user/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

## Cities

#### Get all cities

```http
  GET /cities
```

#### Get one city

```http
  GET /cities/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

## City pictures

#### Get all city pictures

```http
  GET /citypictures
```

#### Get one city picture

```http
  GET /citypictures/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

## Countries

#### Get all coutries

```http
  GET /countries
```

#### Get one country

```http
  GET /country/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

## Country Pictures

#### Get all coutry pictures

```http
  GET /countrypictures
```

#### Get one country picture

```http
  GET /countrypictures/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

## SEARCH

```http
  GET /properties/search/?search=ressource
```

| query       | Type           | Description                              |
| :---------- | :------------- | :--------------------------------------- |
| `ressource` | `query string` | **Required**. name of ressource to fetch |
