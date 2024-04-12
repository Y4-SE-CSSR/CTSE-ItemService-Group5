export const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Swagger API',
            version: '1.0.0',
            description: 'A simple express library',
        },
        servers: [
            {
                url: 'http://localhost:8080',
            },
        ],
    },
    apis: ['./routers/routes/*.js'],
}