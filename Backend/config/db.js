dotenv.config();
const mongoose=require('mongoose');

const dotenv=require('dotenv');

const mondoDbUrl = process.env.mongoURL;

const connection = mongoose.connect(mondoDbUrl);

module.exports={connection}
