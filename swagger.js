const swaggerAutogen = require('swagger-autogen');

const doc = {
    info: {
        title: 'Contact API',
        description:'The Contact API provides the endpoints for the contact API'
    },
    host:'localhost:3000'
}

const outputFile = './swagger-output.json';
const routes = ['./routes/contact.js'];

swaggerAutogen(outputFile, routes, doc);