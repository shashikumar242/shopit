const app = require('./app');
const connectDatabase = require('./config/database');


const dotenv = require('dotenv');

// Handle Uncaught exceptions

process.on('uncaughtException', (err) => {
    console.log(`ERROR : ${err.stack}`);
    console.log('Shutting down server due to uncaught exception');
    process.exit(1);
})


// Setting up config file

dotenv.config({ path: 'backend/config/config.env' })



// connecting to Database

connectDatabase();

const server = app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT : ${process.env.PORT} in ${process.env.NODE_ENV}`)
})

// Handle Unhandled Promise rejections
process.on('unhandledRejection', err => {
    console.log(`ERROR: ${err.message}`);
    console.log('Shutting down the server due to Unhandled Promise rejections');
    server.close(() => {
        process.exit(1);
    })
})