const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8000;

//connect to mongodb
mongoose.connect('mongodb://localhost/couponator');
mongoose.Promise = global.Promise;

//Middleware here
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

// initialize routes
app.use('/api', require('./routes/user_api'));
app.use('/api', require('./routes/store_api'));
app.use('/api', require('./routes/coupon_api'));


//error handling Middleware
app.use(function(err, req, res, next) {
  res.status(422).send({error: err.message});
});

app.listen(port, function(){
  console.log('now listening for requests');
});


/*
// API calls
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
app.listen(port, () => console.log(`Listening on port ${port}`));
*/
