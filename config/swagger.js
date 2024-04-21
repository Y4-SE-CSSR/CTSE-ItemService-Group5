export const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Swagger API - CTSE Item Service',
            version: '1.0.0',
            description: 'API Documentation for CTSE Item Service',
        },
        servers: [
            {
                url: 'http://172.171.69.245:8080',
            },
        ],
    },
    apis: ['./routers/routes/*.js'],
}