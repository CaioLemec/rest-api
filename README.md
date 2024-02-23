<h1 align="center">Transactions API</h1>

<p align="center">
<a href="#project"><img src="https://img.shields.io/static/v1?label=&message=Project&color=333333&style=for-the-badge&logo=nodedotjs"></a>&nbsp;
<a href="#documentation"><img src="https://img.shields.io/static/v1?label=&message=Documentation&color=333333&style=for-the-badge&logo=googledocs"></a>&nbsp;
<a href="#tests"><img src="https://img.shields.io/static/v1?label=&message=Tests&color=333333&style=for-the-badge&logo=jest"></a>&nbsp;
<a href="#environment"><img src="https://img.shields.io/static/v1?label=&message=Environment&color=333333&style=for-the-badge&logo=visual-studio-code"></a>&nbsp;
<a href="#contribuition"><img src="https://img.shields.io/static/v1?label=&message=License&color=333333&style=for-the-badge&logo=LibreOffice"></a>&nbsp;
<a href="#license"><img src="https://img.shields.io/static/v1?label=&message=Contribution&color=333333&style=for-the-badge&logo=Linux"></a>&nbsp;
<a href="#contact"><img src="https://img.shields.io/static/v1?label=&message=Contact&color=333333&style=for-the-badge&logo=gmail"></a>&nbsp;
</p>

## Project

Welcome to the repository of the Transactions API!
This RESTful API built with Node.js and Fastify is the perfect solution for creating and listing financial transactions.
Developed with passion, utilizing best software engineering practices, this project aims to simplify and optimize financial transaction management.

### Purpose

This project was created with the primary goal of studying and gaining hands-on experience with Node.js technology.
It represents one of the initial endeavors into Node.js development, showcasing the learning journey and practical application of knowledge.

### Features:

- Financial Transactions Creation: Allows easy addition of new financial transactions to the system.
- Transaction Listing: Provides an intuitive interface to retrieve and view existing transactions.

---

<br>

## Documentation

#### GET /transactions/

<details title="GET /transactions/" close>

```bash

** Description: **
Get a list of transactions associated with the current session.

** Request: **

- Method: `GET`
- Headers: `Cookie: sessionId=<session_id>`

** Response: **

- Status Code: `200 OK`
- Body: {
  "transactions": [
    {
      "id": "randomUUID()",
      "title": "Deposit",
      "amount": 100.00,
      "session_id": "randomUUID 7 days limit",
      "timestamp": "2024-02-23T12:00:00Z"
    },
    {
      "id": "randomUUID()",
      "title": "Withdraw",
      "amount": -50.00,
      "session_id": "randomUUID 7 days limit",
      "timestamp": "2024-02-23T12:30:00Z"
    }
  ]
}

```

</details>

#### GET /transactions/:id

<details title="GET /transactions/:id" close>

```bash

** Description: **
Get details of a specific transaction by its ID.

** Request: **

- Method: `GET`
- Headers: `Cookie: sessionId=<session_id>`

** Path Parameters: **

- id (string, UUID): ID of the transaction.

** Response: **

- Status Code: `200 OK`
- Body: {
  "transactions": [
    {
    "id": "1",
    "title": "Payment",
    "amount": 100.00,
    "session_id": "abc123",
    "timestamp": "2024-02-23T12:00:00Z"
  }
  ]
}

```

</details>

#### GET /transactions/summary

<details title="GET /transactions/summary" close>

```bash

** Description: **
Get a summary of all transactions associated with the current session.

** Request: **

- Method: `GET`
- Headers: `Cookie: sessionId=<session_id>`

**Response:**

- Status Code: `200 OK`
- Body: {
 "amount": 50.00
}

```

</details>

#### POST /transactions/

<details title="POST /transactions/" close>

```bash

** Description: **
Create a new financial transaction.

** Request: **

- Method: `POST`
- Headers: `'Content-Type:' 'application/json'`
- Request Body: {
  "title": "Payment",
  "amount": 100.00,
  "type": "credit"
}

** Response: **

- Status Code: `201 Created`

```

</details>

---

<br>

## Tests

### Functional Requirements (RF)

- [x] The user must be able to create a new transaction;
- [x] The user must be able to obtain a summary of their account;
- [x] The user must be able to list all transactions that have occurred;
- [x] The user must be able to view a single transaction;

### Business Rules (RN)

- [x] The transaction can be of the credit type, which will add to the total value, or debit type, which will subtract;
- [x] It should be possible to identify the user across requests;
- [x] The user can only view transactions that they have created;

---

<br>

## Environment

- [Node](https://nodejs.org/en) and [Fastify](https://fastify.dev/): The perfect combination for building fast and efficient APIs.
- [SQLite](https://www.sqlite.org/) as development database and [PostgreSQL](https://www.postgresql.org/) as production database: Robust databases to cater to different needs.
- [Knex.js](https://knexjs.org/): Query builder to facilitate database interaction.
- [TypeScript](https://www.typescriptlang.org/): Enhances code quality by providing static types and improved readability.
- [Tsup](https://www.npmjs.com/package/tsup): Facilitates the conversion of TypeScript to JavaScript in the build process for deployment.
- [Render](https://render.com/) as a web service hoster

### Setup Instructions:

Make sure you have the following installations:

- [Git](https://git-scm.com/)
- [Node](https://nodejs.org/en)
- [Npm](https://www.npmjs.com/)

1. **Clone the repository:**

   ```bash
   git clone https://github.com/CaioLemec/rest-api.git
   ```

2. **Install all dependencies by running:**

   ```bash
   npm i
   ```

3. **Create a .env file and a .env.test file following the examples in the root folder:**

   ```
   .env && .env.test
   ```

4. **Run the migrations to create the database:**

   ```bash
   npm run knex -- migrate:latest
   ```

5. **Start the server at port 3333:**

   ```bash
   npm run dev
   ```

6. **Ensure compatibility by checking the versions of dependencies.**

---

<br>

## Contribution

Your contribution is welcome!
If you find bugs, issues, or wish to add new features, open an issue or submit a pull request.

---

## License

Licensed under MIT. Learn more in the [LICENSE](/LICENSE) file.

---

<br>

<br>

## Contact

Feel free to reach out for clarifications or feedback.

<img align="center" src="https://avatars3.githubusercontent.com/u/59886891?s=460&v=4" width="75px;" alt="Caio Lemec" />

<em align="center">Caio Lemec</em>

[![E-mail](https://img.shields.io/static/v1?label=&message=E-mail&color=333333&style=for-the-badge&logo=Gmail)](mailto:caiolemec@gmail.com)
[![LinkedIn](https://img.shields.io/static/v1?label=&message=LinkedIn&color=333333&style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/caiolemec/)

---

<br>
