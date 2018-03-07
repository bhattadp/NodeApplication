[
    'NODE_ENV',
    'PORT',
    'LOGGER_LEVEL',
    'LOGGER_ENABLED',
    'LOGGER_DIR'
  ].forEach((name) => {
    if (!process.env[name]) {
      throw new Error(`Environment variable ${name} is missing`)
    }
  })
  
  const config = {
    env: process.env.NODE_ENV,
    logger: {
      level: process.env.LOG_LEVEL || 'info',
      enabled: process.env.BOOLEAN ? process.env.BOOLEAN.toLowerCase() === 'true' : false,
      dir: process.env.LOGGER_DIR
    },
    server: {
      port: Number(process.env.PORT) || 3000
    }
    // ...
  }
  
  module.exports = config

  //console.log("PORT = " + config.server.port);