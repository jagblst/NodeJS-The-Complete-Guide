const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect(
    'mongodb+srv://jagblst:67PlKjxXglodwrVI@cluster0.4q7kbiv.mongodb.net/?retryWrites=true&w=majority'
  )
    .then((client) => {
      console.log('connected!');
      callback(client);
    })
    .catch((err) => console.log(err));
};

module.exports = mongoConnect;
