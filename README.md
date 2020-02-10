## Description

This is a test I did for a company in 24 hours

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

Also please notice that in a production evironment I will never put the passwords and usernames the way I did in the config folder. it is just for this test, normally I would hide it in an .env file or some other means.

For the credit card processing I used a popular library https://www.npmjs.com/package/card-validator . I don't have much experience with credit card validation. normally the banks APIs will check that and send you the right response so you can handle it at the front end part. This library implements the luhn Algorithm

For the encryption I used bcryptjs with a little bit of salt. This library works great for encrypting and also decrypting

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
