const serverless = require('serverless-http');
const { app } = require('../../index'); // Sesuaikan path jika index.js ada di root

module.exports.handler = serverless(app); 