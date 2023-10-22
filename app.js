const express = require('express');
const path = require('path');
const port = 80;
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

mongoose.connect('mongodb://127.0.0.1:27017/contactdance');

const app = express();
const { Http2ServerRequest } = require('http2');

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    address: String,
    message: String
});

const contact = mongoose.model('contact', contactSchema);

app.use(express.static(path.join(__dirname, 'public')));
app.use('/static', express.static('static'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    const params = {};
    res.status(200).send('This is the homepage.');
});

app.get('/contact', (req, res) => {
    const params = {};
    const footerComponent = ReactDOMServer.renderToString(React.createElement(Footer));
    res.status(200).send(footerComponent);
});

app.post('/contact', (req, res) => {
    var mydata = new contact(req.body);
    mydata.save().then(() => {
      res.send('Your response has been recorded');
    }).catch(() => {
      res.status(400).send('There was an error');
    });
  });
app.listen(port, () => {
    console.log(`Server listening at ${port}`);
});


