const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./models/Skill');
require('./models/Chop');
require('./models/Survey');
require('./services/passport');

var bodyParser = require('body-parser')

// mongoose.connect(keys.mongoURI);

mongoose.connect(keys.mongoURI, function(err, db) {
    if (err) {
        console.log('Unable to connect to the server. Please start the server. Error:', err);
    } else {
        console.log('Connected to Server successfully!');
    }
});

const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);


app.use(passport.initialize());
app.use(passport.session());
app.use( bodyParser.json()); 
app.use(express.json());
require('./routes/authRoutes')(app);
require('./routes/skillRoutes')(app);
require('./routes/surveyRoutes')(app);
require('./routes/chopRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    //Express will serve up production assets like main.js and main.css file
    app.use(express.static('client/build'));

    //if route is not recognized, index.html file is served.
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);