const { CONFIG } = require('maikuro');

const swaggerSpecs = {
  swaggerDefinition: {
    openapi: '3.0.1',
    info: {
      title: 'Atlas management API',
      version: '1.0.0',
      // description: CONFIG.SWAGGER_DESCRIPTION,
      description: '',
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: {
      bearerAuth: [],
    },
    servers: [
      {
        url: `${CONFIG.API_ROOT}`,
      },
    ],
  },
  apis: ['./**/*.router.js', './**/*.swagger.js'],
};

module.exports = { swaggerSpecs };
