const swaggerAutogen = require('swagger-autogen');

const doc = {
    info: {
        title: 'Contact API',
        description:'The Contact API provides the endpoints for the contact API'
    },
    host:'cse341-mz1u.onrender.com',
    basePath: '/contact',
    schemes: ['https'],
}

const outputFile = './swagger-output.json';
const routes = ['./routes/contact.js'];

swaggerAutogen(outputFile, routes, doc);