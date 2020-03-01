var express = require('express');
var app = express();

var server = require('http').Server(app);


const port = process.env.PORT || 8080;

server.listen(port, ()=>{
  console.log('listening for requests on port 3000 +server priduction, ',port);
});

// App setup

var bodyParser = require('body-parser');
var fs = require("fs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


// Load routes
//const allocateTask = require('./routes/timeSheet');
const projects = require('./routes/projects');
const timeSheet = require('./routes/timeSheet');
const resources = require('./routes/resources');


var mongoose = require('mongoose');
const db = "mongodb+srv://sanitish:sanitsum@stayspace-o9cle.mongodb.net/test?retryWrites=true&w=majority";

// Connect to MongoDB
mongoose
  .connect(db,{useNewUrlParser: true,useUnifiedTopology: true  } )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use(express.static('public'));

//load routes
//app.use('/get-tasks-for-worker/:id', workers);

 app.use('/api', resources);
 app.use('/api', projects);
app.use('/api', timeSheet);



app.use((err , req,res , next)=>{
  console.log(err.message);
  res.json({
    code:400,
    message:err.message
  });
})
