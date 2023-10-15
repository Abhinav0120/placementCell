const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/placementCell_development', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function(){
    console.log('connected to database :: MongoDb');
})

module.exports = db;