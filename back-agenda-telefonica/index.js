const express = require('express');
const db = require('./src/db')
const routes = require('./src/routes')
const cors = require('cors');

const app = express()

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
    app.use(cors());
    next();
});
app.use(express.json())
app.use(routes)

app.listen(3333, ()=>console.log('listening on port 3333'))