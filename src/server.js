const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');


const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://rods:rods@oministack-jztub.mongodb.net/aircnc?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// req.query = acessar query params
// req.params = acessar route params
// req.body = acessar corpo da requisição

var port = process.env.PORT || 3333;


app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(port, function() {
    console.log('Our app is running on port: ' + port);
});