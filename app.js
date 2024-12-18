const express = require('express');
const body = require('body-parser');
const hbs = require('express-handlebars');
const db = require('./db');
const route = require('./routes/route');

db.connectDatabase();
const app = express();
app.use(express.static('public'));   
app.use(body.urlencoded({extended:true}));
app.engine('hbs', hbs.engine({
    extname : '.hbs',
    defaultLayout:false,
    runtimeOptions:{
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
}));
app.set('view engine','hbs');
app.use(route);

app.listen(3000,()=>{
    console.log("Server running on http://localhost:3000/");
})