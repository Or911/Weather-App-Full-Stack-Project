const express = require('express');
const app = express();
const api = require('./server/routes/api');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/',api)


const port =3002
app.listen(port,()=>{
    console.log(`Runing on port:  http://localhost:${port}`);
})