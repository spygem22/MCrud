require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const passport = require("passport");
const user = require('./routes/routes');

require('dotenv').config();


const app = express();
const port = process.env.port||5000;

//middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//mongodb connection
const uri = process.env.DB_URI
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true,
useUnifiedTopology: true, useFindAndModify: false});

const connection = mongoose.connection;
connection.once('open', () =>{
console.log("Mongoose database connection is established.");
});

app.use(passport.initialize());
require("./config/passport")(passport);

app.use('/admin', user);

app.listen(port,()=>{
console.log(`Server is running  http://localhost:${port}`);
})