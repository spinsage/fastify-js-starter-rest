const moment = require('moment');

const healthCheck = async (req, res) => {
    let currDate = moment.utc();
    return { message: `Healthcheck REST API called on : ${currDate}` };
}

const routes = async (fastify, options) => {
    fastify.get('/healthcheck', healthCheck);
};

module.exports = routes;