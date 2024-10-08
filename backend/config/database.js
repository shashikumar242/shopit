const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect(process.env.DB_LOCAL_URI, {
        
        // usenewUrlParser: true,
        // useUnifiedTopology: true,
        // useCreateIndex : true
    }).then((con) => {
        console.log(`MongoDB Database connected with Host: ${con.connection.host}`)
    })
}


module.exports = connectDatabase;