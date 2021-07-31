const express = require('express');
const cors = require('cors');

const config = require('./config/db.config')
const mongoose = require('mongoose')

const testimonial = require('./routes/testimonial');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json({limit: '500mb'}));
app.use(bodyParser.urlencoded({ extended: true, limit: '500mb' }));

app.use(express.json())

app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept, Authorization'
      );
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
      next();
});

/* connect mongo db */
mongoose.connect(config.mongo.url, config.mongo.options)
.then(result => { 
      console.info(`mongodb connected`)
})
.catch(error => {
      console.error(`connectionn error ${error.message}, ${error}`)
})

/** RoutesList */
app.get('/api/test', (req, res) => {
      res.send({
            message: "OK Testing"
      })
})
app.use('/api/testimonial', testimonial)

module.exports = app