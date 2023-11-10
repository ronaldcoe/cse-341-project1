const swaggerAutogen = require('swagger-autogen');

const doc = {
    info: {
        title: 'Contact API',
        description:'The Contact API provides the endpoints for the contact API'
    },
    host:'https://cse341-mz1u.onrender.com/contact'
}

const outputFile = './swagger-output.json';
const routes = ['./routes/contact.js'];

swaggerAutogen(outputFile, routes, doc);