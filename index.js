const port = process.env.PORT || 8080;

const fastify = require('fastify')({
    logger: true
});

if (process.env.NODE_ENV !== 'production') {
    fastify.register(require('fastify-cors'), {
        // put your options here
    });
}

fastify.register(require('./src/routes'));

fastify.listen(port, (err, address) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    fastify.log.info(`server listening on ${port}`);
});