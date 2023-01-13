const rateLimit = require("express-rate-limit")
const { logEvents } = require("./logger")

const loginLimiter = rateLimit({
  window: 60 * 1000, 
  max: 5, 
  message :
  {
    message: "Too many login attemps from this IP, please try again after a 60 second pause", 
  },
  handler : (req, res, next, options) => {
    logEvents(`Too many Requests ${options.message.message}\t${res.method}\t${req.url}\t${req.headers.origin}`, error.log)
    res.status(options.statusCode).send(options.message)
  }, 
  standardHeaders: true, 
  legacyHeaders: false 
})

module.exports = loginLimiter