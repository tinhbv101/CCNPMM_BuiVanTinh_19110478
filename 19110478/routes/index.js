const homeRouter = require('./home.route');
const _19110478Router = require('./19110478.route');
const messageRouter = require('./message.route');
const logMiddleware = require('../middleware/log.middleware')

function route(app) {
    app.use('/', logMiddleware , homeRouter)
    app.use('/19110478', logMiddleware , _19110478Router)
    app.use('/message', logMiddleware , messageRouter)
}

module.exports = route