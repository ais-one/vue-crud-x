'use strict'
const axios = require('axios')
// let config
// if (!config) {
module.exports = async function() {
  const path = require('path')
  const { NODE_ENV, VAULT } = process.env

  if (NODE_ENV && APP_PATH) {
    global.CONFIG = { NODE_ENV: NODE_ENV }
    // load defaults
    try {
      const defaultCfg = require('./config.default.js')
      global.CONFIG = { ...CONFIG, ...defaultCfg }
    } catch (e) {
      console.log('missing default configuration file(s)', e.toString())
    }

    // load common config from file
    try {
      const commonEnv = require(path.join(APP_PATH, 'config', 'common.env.js'))
      global.CONFIG = { ...CONFIG, ...commonEnv }
    } catch (e) {
      console.log('missing common configuration file(s)', e.toString())
    }
    // load specific config from file
    try {
      const specificEnv = require(path.join(APP_PATH, 'config', process.env.NODE_ENV + '.env.js'))
      global.CONFIG = { ...CONFIG, ...specificEnv }
    } catch (e) {
      console.log('missing environment specific configuration file(s)', e.toString())
    }
    // load secret common config from file
    try {
      const commonEnv = require(path.join(APP_PATH, 'config', 'secret', 'common.env.js'))
      global.CONFIG = { ...CONFIG, ...commonEnv }
    } catch (e) {
      console.log('missing common configuration file(s)', e.toString())
    }
    // load secret specific config from file
    try {
      const specificEnv = require(path.join(APP_PATH, 'config', 'secret', process.env.NODE_ENV + '.env.js'))
      global.CONFIG = { ...CONFIG, ...specificEnv }
    } catch (e) {
      console.log('missing environment specific configuration file(s)', e.toString())
    }

    if (VAULT && VAULT !== 'unused') {
      try {
        const vault = JSON.parse(VAULT)
        let vaultConfig = {} 
        if (vault.secrets) {
          // insecure and not a good way to get secrets
          vaultConfig = vault.secrets 
        } else {
          // Get from Hashicorp Vault, can replace with other secrets manager
          // curl -s -H "X-Vault-Token: $token" $url
          const vaultRes = await axios.get(vault.url, { headers: { 'X-Vault-Token': vault.token } })
          vaultConfig = vaultRes.data.data.data  
        }
        global.CONFIG = { ...CONFIG, ...vaultConfig }
      } catch (e) {
        console.log('environment vault response error', e.toString(), VAULT)
      }
    }

    const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds))
    await sleep(2000)
    console.log('CONFIGGGG DONE DONE DONE')
  } else {
    console.log('NODE_ENV and APP_PATH needs to be defined')
  }
}
