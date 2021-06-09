const express = require('express');
const mongoose = require('mongoose');
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');
const app = express();

//DB config
const db = require('./config/keys').mongoURI;

// connect to mongoose
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("mongo connected"))
    .catch(err => console.log(err));

app.get('/',(req,res) => res.send('Hello i'));

// use route
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server runnig on port ${port}`));

