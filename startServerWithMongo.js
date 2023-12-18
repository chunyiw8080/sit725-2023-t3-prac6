let express = require('express');
let app = express();

const router = require('./router/router');
let port = process.env.port || 3000;

app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/', router);

app.listen(port, ()=>{
    console.log('express server started');
});