const mongoose=require('mongoose');

const mondoDbUrl = process.env.mongoURL;

const connection = mongoose.connect(mondoDbUrl);

module.exports={connection}
