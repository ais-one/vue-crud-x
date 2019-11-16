'use strict'
// const functions = require('firebase-functions')
const express = require('express')
const history = require('connect-history-api-fallback')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
// const helmet = require('helmet')
// const csrf = require('csurf')
// app.use(csrf());
// app.use(function(req, res, next){ 
//  // Expose variable to templates via locals
//  res.locals.csrftoken = req.csrfToken(); 
//  next()
// })
// <input type="hidden" name="<i>csrf" value={{csrftoken}} />

// RATE-LIMIT
// const redisClient = require('redis').createClient();
// const app = express();
// const limiter = require('express-limiter')(app, redisClient);
// // Limit requests to 100 per hour per ip address.
// limiter({
//   lookup: ['connection.remoteAddress'], total: 100, expire: 1000 * 60 * 60
// })

const http = require('http')
const https = require('https')
const proxy = require('http-proxy-middleware')

const swaggerUi = require('swagger-ui-express')
const swaggerJSDoc = require('swagger-jsdoc')

const YAML = require('yamljs')
const swaggerDocument = YAML.load('./docs/openapi.yaml')

const apollo = require('./services/graphql')

const { httpsCerts } = require('./services/certs')
const { API_PORT, USE_HTTPS, WWW_PROXY_URL } = require('./config')

console.log('httpsCerts', httpsCerts)

// Set CORS headers so that the React SPA is able to communicate with this server
// Access-Control-Allow-Origin=*
// Access-Control-Allow-Methods=GET,POST,PUT,PATCH,DELETE,OPTIONS
// Access-Control-Allow-Headers=Content-Type

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
const app = express()

app.set('trust proxy', true) // true if behind proxy, false if direct connect

apollo.applyMiddleware({ app }) // console.log(`GraphqlPATH ${server.graphqlPath}`)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser('some_secret'))

// app.use(history()) // causes problems when using postman - set header accept application/json in postman
// app.use(express.static('public')) // for serving static content
// app.use('/uploads', express.static('uploads')) // need to create the folder uploads

// PASSPORT
// app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true })) // required for OAuth 1 (e.g. twitter), OAuth2 with state (e.g. linkedin)
// app.use(passport.initialize())
// app.use(passport.session()) // SESSION - call this AFTER calling express session

const specs = swaggerJSDoc({
  swaggerDefinition: {
    info: {
      title: 'Vue Crud X',
      version: '1.0.0',
      description: 'A sample API',
    },
    host: '127.0.0.1:' + API_PORT,
    basePath: '/',
    tags: [
      { name: 'Auth', description: 'Authentication' },
      { name: 'Base', description: 'The Base API' },
    ],
    schemes: [ 'http', 'https' ],
    securityDefinitions: {
      Bearer: {
        type: 'apiKey',
        name: 'Authorization',
        in: 'header'
      }
    },
    consumes: ['application/json'],
    produces: ['application/json']
  },
  apis: ['./routes/*.js']
})

app.use('/api-docs', express.static('docs'), swaggerUi.serve, swaggerUi.setup(swaggerDocument, { // for OpenAPI
  swaggerOptions: { docExpansion: 'none' },  
  explorer: true 
}))

app.use('/api-docs2', swaggerUi.serve, swaggerUi.setup(specs, { // for OpenAPI
  swaggerOptions: { docExpansion: 'none' },  
  explorer: true 
}))

const authRoutes = require('./routes/auth')
const apiRoutes = require('./routes/api')
const authorRoutes = require('./routes/author')
const bookRoutes = require('./routes/book')
const categoryRoutes = require('./routes/category')
const pageRoutes = require('./routes/page')

// const corsOptions = {
//   exposedHeaders: ['refresh-token'] // allow this to be sent back in response
// }
app.use(cors())
app.use('/api/auth', authRoutes)
app.use('/api', apiRoutes, authorRoutes, bookRoutes, categoryRoutes, pageRoutes)
if (WWW_PROXY_URL) app.use('*', proxy({
  target: WWW_PROXY_URL,
  changeOrigin: true,
  // ws: true,
  // onProxyRes: function(proxyRes, req, res) {
  //   if (proxyRes.headers["set-cookie"] !== undefined) {
  //     proxyRes.headers["set-cookie"] = proxyRes.headers[
  //       "set-cookie"
  //     ][0].replace("Secure; ", ""); // JSESSIONID cookie cannot be set thru proxy with Secure
  //     return proxyRes;
  //   }
  // }
}))

//app.get("*", async (req, res) => res.status(404).json({ data: 'Not Found...' }))

// for Firebase Functions
// exports.api = functions.https.onRequest(async (req, res) => {
//   // if (!req.path) {
//   //   req.url = `/${req.url}` // prepend '/' to keep query params if any
//   // }
//   return app(req, res)
//   // return res.send("Hello from Firebase!")
// })

let server
if (USE_HTTPS) {
  server = https.createServer(httpsCerts, app)
} else {
  server = http.createServer(app)
}

// apollo.installSubscriptionHandlers(server)
// server.listen(API_PORT, () => {
//   console.log('REST API listening on port ' + API_PORT)
//   console.log(`🚀 GraphQL Server ready at http://localhost:${API_PORT}${apollo.graphqlPath}`)
//   console.log(`🚀 GraphQL Subscriptions ready at ws://localhost:${API_PORT}${apollo.subscriptionsPath}`)
// })

const WebSocket = require('ws')
const wss = require('./services/websocket')

if (wss) {
  wss.on('connection', (ws) => {
    console.log('ws client connected')
    ws.isAlive = true
    ws.on('pong', () => { ws.isAlive = true })
    ws.on('close', () => { console.log('ws client disconnected') })
    ws.on('message', async (message) => {
      console.log('message', message)
      // error handling
      // ws.send('something', function ack(error) { console.log }) // If error !defined, send has been completed, otherwise error object will indicate what failed.
      try { // try-catch only detect immediate error, cannot detect if write failure
        // const timestamp = new Date(Date.now())
        // send to other clients
        wss.clients.forEach((client) => {
          if (client !== ws && client.readyState === WebSocket.OPEN) {
            client.send(message)
          }
        })
        ws.send(message) // echo back message...
      } catch (e) {}
    })
  })
  // keep alive
  setInterval(() => {
    console.log('WS Clients: ', wss.clients.size)
    wss.clients.forEach((ws) => {
      if (!ws.isAlive) return ws.terminate()
      ws.isAlive = false
      ws.ping(() => {})
    })
  }, 30000)  
}

module.exports = server
