const mongo = require('mongodb').MongoClient;

const url ="mongodb://localhost:27017/";

const minAge = process.argv[2];

mongo.connect(url, function(err, database){

    if (err) throw err;
    const db = database.db('learnyoumongo');
    const collection = db.collection('parrots');
    // console.log("collection is: ", collection);
    collection.find({age:{$gt: +minAge}}).toArray(function(err, result){
        if (err) throw err;
        // for (let record of result) {
        //     if(record.age > minAge) {
        //         console.log(record);
        //     }
        //     // console.log(record);
        // } 
        console.log(result);
        database.close();
    });
});