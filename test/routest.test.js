const { test } = require('tap')
const routes = require('../src/routes')
const Fastify = require('fastify')

test('Requests the "/healthcheck" route', async t => {
    const fastify = Fastify()

    fastify.register(routes)

    const response = await fastify.inject({
        method: 'GET',
        url: '/healthcheck'
    })
    t.equal(response.statusCode, 200, 'Success Response')
})

test('Requests the "/*" route', async t => {
    const fastify = Fastify()

    fastify.register(routes)

    const response = await fastify.inject({
        method: 'GET',
        url: '/'
    })
    t.equal(response.statusCode, 404, 'Failure Response')
})