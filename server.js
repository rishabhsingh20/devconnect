const express = require('express');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');
const app = express();

// body parser
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//DB config
const db = require('./config/keys').mongoURI;

// connect to mongoose
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("mongo connected"))
    .catch(err => console.log(err));

// passport middleware
app.use(passport.initialize());

// passoprt config
require('./config/passport')(passport);

// use route
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server runnig on port ${port}`));

