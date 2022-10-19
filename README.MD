# Assignment build the first RestAPI using JWT

## Setup

- **users table setup:**
  <The request typ>

  id: serial primary key
  email: varchar(30)
  password: varchar(255)

- **reflections table setup:**
  <The request typ>

  id: serial primary key
  success: varchar(255)
  low_point: varchar(255)
  take_away: varchar(255)
  owner_id: integer references users(id)
  created_date: varchar(30)
  modified_date: varchar(30)

- **Install all dependencies:**

  <The request typ>

  npm install

- **Start nodemon:**
  <The request type>

  npm run dev

- **The application is run at `http://localhost:8000`**

## Register

- **URL:**
  <The request type>
  /api/v1/users/register
- **Method:**
  <The request type>
  POST
- **Success response:**
  Code: 201
  ![response register success](https://github.com/fadlan7/final-project1/blob/main/screenshot/register.png)
- **Error response:**
  <The request type>

      Code: 500
      Content: { "message": "Internal Server Error" }

## Login

- **URL:**
  <The request type>
  /api/v1/users/login
- **Method:**
  <The request type>
  POST
- **Success response:**
  Code: 200
  ![response login success](https://github.com/fadlan7/final-project1/blob/main/screenshot/login.png)
- **Error response:**
  <The request type>

      Code: 401
      Content: { "message": "User with email .... does not match!" }

      Code: 401
      Content: { "message": "Wrong password!" }

      Code: 500
      Content: { "message" : "Internal Server Error" }

## Reflection

### Create one reflection

- **URL:**
  <The request type>
  /api/v1/reflections
- **Method:**
  <The request type>
  POST
- **Success response:**
  Code: 201
  ![response login success](https://github.com/fadlan7/Assignment-RestAPI-JWT/blob/main/apiresponse_images/postman-loginuser.png)
- **Error response:**
  <The request type>

      Code: 500
      Content: { "message": "Internal Server Error" }

### Get all own user reflections

- **URL:**
  <The request type>
  /api/v1/reflections
- **Method:**
  <The request type>
  GET
- **Success response:**
  Code: 200
  ![response login success](https://github.com/fadlan7/Assignment-RestAPI-JWT/blob/main/apiresponse_images/postman-loginuser.png)
- **Error response:**
  <The request type>

      Code: 500
      Content: { "message": "Internal Server Error" }

### Edit one reflection

**_Need login before edit reflection_**

- **URL:**
  <The request type>
  /api/v1/reflections/:id
- **Method:**
  <The request type>
  PUT
- **Success response:**
  Code: 200
  ![response login success](https://github.com/fadlan7/Assignment-RestAPI-JWT/blob/main/apiresponse_images/postman-loginuser.png)
- **Error response:**
  <The request type>

      Code: 404
      Content: { "message": "Reflection with id=... not found in database" }

      Code: 403
      Content: { "message": "User with email ... does not have permission to access reflection with id ..." }

      Code: 500
      Content: { "message" : "Internal Server Error" }

### Delete one reflection

**_Need login before delete reflection_**

- **URL:**
  <The request type>
  /api/v1/reflections/:id
- **Method:**
  <The request type>
  DELETE
- **Success response:**
  Code: 200
  ![response login success](https://github.com/fadlan7/Assignment-RestAPI-JWT/blob/main/apiresponse_images/postman-loginuser.png)
- **Error response:**
  <The request type>

      Code: 404
      Content: { "message": "Reflection with id=... not found in database" }

      Code: 403
      Content: { "message": "User with email ... does not have permission to access reflection with id ..." }

      Code: 500
      Content: { "message" : "Internal Server Error" }

## Response no routes

<The request type>

    Code: 404
    Content: { "message": "That route does not exist!"}
