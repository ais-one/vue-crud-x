const fs = require('fs')
const path = require('path')
const express = require('express')

const agenda = require('../../common-app/services/mq/agenda').get() // message queue
const bull = require('../../common-app/services/mq/bull')
const fcmSend = require('../../common-app/comms/fcm')

// const path = require('path')
// path.extname('index.html')
// returns '.html'

// req.file / req.files[index]
// {
//   fieldname: 'kycfile',
//   originalname: 'tbd.txt',
//   encoding: '7bit',
//   mimetype: 'text/plain',
//   destination: 'uploads/',
//   filename: 'kycfile-1582238409067',
//   path: 'uploads\\kycfile-1582238409067',
//   size: 110
// }

const { UPLOAD_PATH } = require('../config')
const { gcpGetSignedUrl } = require('../../common-app/gcp')
const { authUser } = require('../middlewares/auth')
const multer = require('multer')

const memoryUpload = multer({ 
  limits: {
    files : 1,
    fileSize: 5000 // size in bytes
  },
  // fileFilter,
  storage: multer.memoryStorage()
})

const upload = multer({
  // limits: {
  //   files : 1,
  //   fileSize: 1000000 // size in bytes
  // },
  // fileFilter: (req, file, cb) => {
  //   if (
  //     !file.mimetype.includes("jpeg") && !file.mimetype.includes("jpg") && !file.mimetype.includes("png")
  //   ) {
  //     return cb(null, false, new Error("Only jpeg, png or pdf are allowed"));
  //   }
  //   cb(null, true);
  // },
  storage: multer.diskStorage({
    destination: function (req, file, cb) { cb(null, UPLOAD_PATH) },
    filename: function (req, file, cb) { cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname) }
  })
})

module.exports = express.Router()
  .get('/wrap-test', asyncWrapper(async (req, res) => {
    // return res.status(201).json({ aa: 'bb' }) // should not return...
    // next(new Error('Generated Wrapper Error - next')) // use throw instead
    throw new Error('Generated Wrapper Error - throw')
  }))

  .get('/error', asyncWrapper(async (req, res) => { // for an error - test catching of errors
    req.something.missing = 10
    res.json({ message: 'OK' })
  }))

  .get('/crash', asyncWrapper(async (req, res) => { // for crashing the application - catching error in process exception
    fs.readFile('somefile.txt', (err, data) => {
      if (err) throw err
      console.log(data)
    })
    res.json({ message: 'Crash initiated check express server logs' })
  }))

  /**
   * @swagger
   * /api/health:
   *    post:
   *      tags:
   *        - "Base"
   *      description: Health check
   */
  .get('/health', (req, res) => { res.json({ message: 'OK' }) }) // health check
  /**
   * @swagger
   * /api/health-auth:
   *    post:
   *      tags:
   *        - "Base"
   *      security:
   *        - Bearer: []
   *      description: Health check with authorization
   */
  .get('/health-auth', authUser, (req, res) => { res.json({ message: 'OK' }) }) // health check auth

  // test uploads
  .post('/gcp-sign', asyncWrapper(gcpGetSignedUrl))

  .post('/upload', upload.single('filedata'), (req,res) => { // avatar is form input name
    console.log('file original name', req.file.originalname)
    console.log('text data', req.body.textdata)
    res.json({ message: 'Uploaded' })
  })
  .post('/uploads', upload.array('photos', 3), (req, res) => { // multiple
    console.log(req.files.length)
    res.json({ message: 'Uploaded' })
    // req.files is array of `photos` files
    // req.body will contain the text fields, if there were any
  })
  .post('/upload-memory', memoryUpload.single('memory'), (req, res) => {
    console.log(req.file.originalname, req.body)
    res.json({ message: req.file.buffer.toString() })
    // req.files is array of `photos` files
    // req.body will contain the text fields, if there were any
  })

  // test FCM push notification when device registers... 
  .get('/test-pn-token/:pnToken', async (req, res) => {
    try {
      console.log('PN token received: ' + req.params.pnToken, req.query)
      if (req.query.reply === 'yes') {
        const rv = await fcmSend(req.params.pnToken, 'FCM Message', 'Received from My Server ' + Date.now())
        console.log('send rv', rv.status)
        res.status(200).json({ status: rv.status })  
      } else {
        res.status(200).json({ pnToken: req.params.pnToken })  
      }
    } catch (e) {
      res.status(500).json({ e: e.toString() })
    }
  })

  // message queues
  .get('/mq-agenda', asyncWrapper(async (req, res) => { // test message queue - agenda
    const job = await agenda.now('registration email', { email: 'abc@test.com' })
    console.log('Agenda Pub')
    res.json({ job, note: 'Check Server Console Log For Processed Message...' })
  }))

  .get('/mq-bull', asyncWrapper(async (req, res) => { // test message queue - bullmq
    if (bull) {
      const jobOpts = { removeOnComplete: true, removeOnFail: true }
      bull.add({ message: new Date() }, jobOpts)
      console.log('Bull Pub')
    } else {
      console.log('No Bull MQ configured')
    }
    res.json({ note: 'Check Server Console Log For Processed Message...' })
  }))

