
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const api = require('./routes/api');




const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/api',api);

app.listen(3000,()=>{
    console.log("3000 Listening");
})

