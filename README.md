## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Support

For this endpoint I used NestJS, that combines node, express and typescript.
For the database I used mongodb, since I can create a Database on the cloud and for the shake of this test that was the fastest option. Wish I was able to use Postgres SQL.

You can run this project in development mode with “npm run start:dev”
For production there are several ways but the fastest and easest is to run:
“Npm run start:prod”
This will create a folder named dist. Inside that folder, if everything compiled correctly you can run the server by executing “main.js”
In production we just need to put the content of the dist folder whenever we need to and run it normally like any other production app

You can also use Postman to test this API. You just need to make a call to “localhost:4000/card” and make sure you enter these values at the body section (as raw data)
ccNumber
ccCvv
ccName
ccExpiration

And make a post request
