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




## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL="postgresql://username:password@IP:port/database?schema=public"`

Dont forget to replace "username, password, database, port,IP" with your personnals postgreSQL credentials.

You need a postgreSQL database with at leat one table to init Prisma.

---
RUN YOUR DATABASE BEFORE INIT
---



## Database ORM Init

In this secion we will init Prisma and sync the database

```bash
  $ npx prisma migrate dev
```
---
Be carreful if you allready have a database with the same name all your datas wiil be destoyed.
---
Say yes when the prompt ask you if you want to reset your DB.


Now you can run the dev environment with this command : 
```bash
  npm run dev
```


If nothins went wrong you should see something like this 

```bash
> surfcamp-api@1.0.0 dev
> ts-node-dev --respawn --exit-child ./src/index.ts
[INFO] 21:57:37 ts-node-dev ver. 1.1.6 (using ts-node ver. 9.1.1, typescript ver. 4.3.2)
Server running on http://localhost:5000
```
-----
## //  API Reference. //
-----

Properties
--
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

Addresses
---
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



Rooms
----
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

Users
---
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


Cities
---
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


City pictures
---
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



Coutries
---
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


Country Pictures
---
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




SEARCH
--
```http
  GET /properties/search/?search=ressource
```


| query | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `ressource`      | `query string` | **Required**. name of ressource to fetch |



