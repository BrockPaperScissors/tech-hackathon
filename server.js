const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const cookieSession = require('cookie-session');
const passport = require('passport');

// Always require and configure near the top 
require('dotenv').config();

require('./config/database');
require('./config/passport');

const indexRouter = require('./routes/index');

const app = express();

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));
// app.use(session({
//     secret: process.env.SECRET,
//     resave: false,
//     saveUninitialized: true,
// }));
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY],
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'build')));

app.use('/', indexRouter);

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, function() {
    console.log(`Express app running on port ${port}`)
});