const mongoose=require('mongoose');

const dotenv=require('dotenv');

dotenv.config();

const connection = mongoose.connect('mongodb+srv://Harish_B:QmwdryPeaQ9Sg4CU@cluster0.eitmfzj.mongodb.net/capstonedb');

module.exports={connection}
