require('dotenv').config();

const port = process.env.PORT || 3001;

const fastify = require('fastify')({
    logger: true
});

if (process.env.NODE_ENV !== 'production') {
    fastify.register(require('fastify-cors'), {
        // put your options here
    });
}

fastify.register(require('./src/routes'));

fastify.listen(port, '0.0.0.0', (err) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    fastify.log.info(`server listening on ${port}`);
});