const express = require('express')
const app = express()
const port = 3000
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'User API',
            description: 'User API Information',
            contact: {
                name: 'Amazing Developer'
            },
            servers: ["http://localhost:3000"]
        }
    },
    apis: ["app.js"]
};
const swageerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swageerDocs));

/**
 * @swagger
 * /users:
 *  get:
 *      description: Use to request all users
 *      responses:
 *          '200':
 *              description: A successful response
 */
app.get('/users', (req, res) => {
    res.json([
        { id: 1, name: 'John' },
        { id: 2, name: 'Doe' }
    ])
})

app.get('/user/:userId', (req, res) => {
    res.send('User ID: ' + req.params.userId)
})
    


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

