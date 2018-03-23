//Loading express module with 'require'
var express = require('express')
var app = express()

//Define reqeust response in root URL(/)
app.get('/', function (req, res){
  res.send('This is a test page')
})

//Launch listening server on port 8080
app.listen(8080, function(){
  console.log('App listening on port 8080!')
})
