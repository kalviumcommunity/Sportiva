const mongoose=require('mongoose');
require("dotenv").config();

const mongoDbUrl = process.env.mongoDbUrl || "mongodb+srv://Harish_sportiva:orWw95OS8eNE15LK@cluster1.txeavbr.mongodb.net/student";
console.log(mongoDbUrl)

const connection = mongoose.connect(mongoDbUrl);

module.exports={connection}
