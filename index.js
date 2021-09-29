// invocamos experss
const express = require('express');
const morgan = require('morgan');
const app = express();

// function logger(req,res,next){
//     console.log(`Route Received : ${req.protool}://${req.get('host')}${req.originalUrl}`);
//     next();
// }
app.set('appName','Express');
app.set('port','3000')

app.get('/',(req,res) => {
   res.render('index.ejs'); 
});

app.use(express.json());
app.use(morgan('dev'));
app.set('view engine','ejs');

app.get('/test',(req,res)=>{
    res.send('<h1>TEST</h1>');
});

app.post ('/test',(req,res)=>{
    //res.send('<h1>TEST</h1>');
    res.send(req.body);
});

app.use(express.static('public'));

app.listen(app.get('port'),()=>{
    console.log('Server on port ',app.get('port'));
});