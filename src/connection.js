// imported modules
const mongoose = require('mongoose');

// connection to MongoDB 
const URI = process.env.MONGODB_URI;
const connection = async () => {
     try {
          await mongoose.connect(URI, {
               useNewUrlParser: true,
               useUnifiedTopology: true,
               useCreateIndex: true,
               useFindAndModify: false
          });
          console.log('successful connection to MongoDB')
     }
     catch (err) {
          console.log(err.message);
     }
}

// exported module
module.exports = connection;
