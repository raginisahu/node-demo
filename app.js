const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
var bodyParser = require('body-parser');
const submitForm = require('./router/submitForm')

app.use(bodyParser.urlencoded({ extended: true })); 
app.post('/fibsubmit',submitForm.calFabSeries)
app.post('/submit',submitForm.submitForm)
router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/views/form.html'));
  //__dirname : It will resolve to your project folder.
});
router.get('/fib',function(req,res){
  res.sendFile(path.join(__dirname+'/views/fibform.html'));
  //__dirname : It will resolve to your project folder.
});

app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');