const mongoose=require('mongoose');

const dotenv=require('dotenv');

dotenv.config();

const mondoDbUrl = process.env.mongoURL;

const connection = mongoose.connect(mondoDbUrl);

module.exports={connection}
