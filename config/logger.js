'use strict';
const winston = require('winston');
const config = require('./envConfig')
const fs = require('fs');
//const env = process.env.NODE_ENV || 'development';
//const logDir = './log';

// Create the log directory if it does not exist
if (!fs.existsSync(config.logger.dir)) {
    fs.mkdirSync(config.logger.dir);
  }

  const tsFormat = () => (new Date()).toLocaleTimeString();
  const logger = new (winston.Logger)({
    transports: [      
      new (winston.transports.Console)({
        timestamp: tsFormat,
        colorize: true,
        level: config.logger.level
      }),
      new (winston.transports.File)({
        filename: `${config.logger.dir}/results.log`,
        timestamp: tsFormat,
        level: config.logger.level
      })
      /*
      new (require('winston-daily-rotate-file'))({
      filename: `${logDir}/-results.log`,
      timestamp: tsFormat,
      datePattern: 'yyyy-MM-dd',
      prepend: true,
      level: env === 'development' ? 'verbose' : 'info'
    })
      */ 
    ]
  });

logger.info('Application logger instantiated');


module.exports = logger;