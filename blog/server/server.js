const express = require('express');
const app = new express();

// security middleware import
const ratelimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSenitize = require('express-mongo-sanitize');
const hpp = require('hpp');
const cors = require('cors');
const mongoose = require('mongoose');


// security middleware implement
app.use(helmet());
app.use(mongoSenitize());
app.use(hpp());
app.use(cors());

// request rate limiting;
const limiter = ratelimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
})
app.use(limiter);

// database connection

// const options = {user:'', pass:''}

mongoose.connect('mongodb://127.0.0.1:27017/blog')
.then(() => console.log("Database connection successfull"))
.catch((error) => console.error("failed to connect" + error));

// routes call


// undefined route;


//Run to the browser
const port = 3000;
app.listen(port , () =>{
    console.log("start the server on port ", port);
})