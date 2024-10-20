const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const secretKey = crypto.randomBytes(64).toString('hex');

const envPath = path.resolve(__dirname, 'env');

fs.appendFileSync(envPath, `JWT_SECRET=${secretKey}\n`, 'utf8');

console.log('Secret key generated and sored in .env file', secretKey);