const uuid = require('uuid/v4')
const qrcode = require('qrcode')
const otplib = require('otplib')
const axios = require('axios')

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const keyv = require('./keyv')

const User = require('../models/User')

const { USE_OTP, KEY_EXPIRY, SECRET_KEY, OTP_SECRET_KEY } = require('../config')


// algorithm
// expiresIn
// issuer  = 'Mysoft corp' 
// subject  = 'some@user.com'
// audience  = 'http://mysoftcorp.in'
// ip

// Create a token from a payload
function createToken(payload, secretKey, options) {
  return jwt.sign(payload, secretKey, options)
}

// Check if the user exists in database
async function isAuthenticated({ email, password }) {
  let user = null
  try {
    user = await User.query().where('email', '=', email)
    if (user && bcrypt.compareSync(password, user[0].password)) return user[0]
  } catch (e) { }
  return null
}

async function isGithubAuthenticated(githubId) {
  let user = null
  try {
    user = await User.query().where('githubId', '=', githubId)
    if (user) return user[0]
  } catch (e) { }
  return null
}

const authUser = async (req, res, next) => {
  // console.log('auth express', req.path)
  try {
    if (req.headers.authorization === undefined || req.headers.authorization.split(' ')[0] !== 'Bearer') {
      return res.status(401).json({ message: 'Error in authorization format' })
    }
    const token = req.headers.authorization.split(' ')[1]
    // const matchingToken = await keyv.get(token)
    if (token) { // matchingToken
      const key = (USE_OTP && req.path !== '/otp') ? OTP_SECRET_KEY : SECRET_KEY // select the key to use

      let result = null
      try {
        result = jwt.verify(token, key) // and options
      } catch (e) {
        if (e.name === 'TokenExpiredError') {
          console.log('req.path', req.path)
          if (req.path === '/refresh') {
            // TBD check refresh token & user... && refresh token not expired...
            // refresh token - always stateful
            // const nowSeconds = parseInt(Date.now() / 1000)
            // const tokenPeriodSeconds = result.exp - result.iat
            // if ok generate new token & refresh token?
            const decoded = jwt.decode(token)
            const newToken = createToken({ id: decoded.id, verified: true }, SECRET_KEY,  { expiresIn: USE_OTP ? '5m' : KEY_EXPIRY }) // 5 minute expire for login
            return res.status(200).json({ token: newToken })
          }      
          return res.status(401).json({ message: 'TokenExpiredError' })
        }
      }
      if (result) {
        req.decoded = result
        return next()
      }
    }
  } catch (err) {
    console.log('authUser', err.toString())
  }
  return res.status(401).json({ message: 'Error in token' })
}

module.exports = {
  authUser,
  createToken,
  isAuthenticated,
  isGithubAuthenticated
  /*
  processError: (e) => {
    const messages = {
      '200': 'Ok',
      '201': 'Created',
      '400': 'Client Error',
      '403': 'Forbidden',
      '404': 'Not Found',
      '422': 'Invalid Input'
    }
    let status = '500'
    let data = 'Server Error'
    try {
      data = messages[e.message]
      status = e.message
    } catch(e) { }
    return { status, data }
  }
  */
}

/*
const crypto = require('crypto')

function encryptText(algor, key, iv, text, encoding) {
  const cipher = crypto.createCipheriv(algor, key, iv)
  encoding = encoding || 'binary'
  let result = cipher.update(text, 'utf8', encoding)
  result += cipher.final(encoding)
  return result
}

function decryptText(algor, key, iv, text, encoding) {
  const decipher = crypto.createDecipheriv(algor, key, iv)
  encoding = encoding || 'binary'
  let result = decipher.update(text, encoding)
  result += decipher.final()
  return result
}

const data = 'This is a test'
const password = 'hello'
const algorithm = 'aes256'
const args = process.argv.slice(3)

data = args[0]
password = args[1]
algorithm = args[2]

console.log('Text: ' + data)
console.log('Password: ' + password)
console.log('Type: ' + algorithm)

const hash, key

if (algorithm.includes("256")) {
	hash = crypto.createHash('sha256')
  hash.update(password)
	key = new Buffer.alloc(32,hash.digest('hex'),'hex')
} else if (algorithm.includes("192")) {
	hash = crypto.createHash('sha192')
  hash.update(password);
	key = new Buffer.alloc(24,hash.digest('hex'),'hex')
} else if (algorithm.includes("128")) {
	hash = crypto.createHash('md5')
  hash.update(password)
  key = new Buffer.alloc(16,hash.digest('hex'),'hex')
}

const iv = new Buffer.alloc(16,crypto.pseudoRandomBytes(16))
console.log('Key: ' + key.toString('base64'))
console.log('Salt: ' + iv.toString('base64'))

const encText = encryptText(algorithm, key, iv, data, 'base64')
console.log('Encrypted: ' + encText)

const decText = decryptText(algorithm, key, iv, encText, 'base64')
console.log('Decrypted: ' + decText);
*/