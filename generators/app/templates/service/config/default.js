require('dotenv').config({
  path: require('find-config')('.env')
});

module.exports = {
  port: 4003,
  debug: {
    logLevel: 'debug'
  },
  swaggerJsonDir: '../'
};
