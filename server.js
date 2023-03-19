const express = require('express');
const app = express();
const path = require("path");
const api = require('./server/routes/api');
const DBConnect = require('./server/utilities/DBConnection');
DBConnect.connectToDataBase()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));

app.use('/',api)


const port =3002
app.listen(port,()=>{
    console.log(`Runing on port:  http://localhost:${port}`);
})