const express = require('express');
const path = require('path');
const port = 8500;

const db = require('./config/mongoose') ;
const Task = require('./models/task');


const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

//accessing ejs file at the corrosponding routes
app.get('/', function (req, res) {
Task.find({}, function(err,tasks){
  if (err){
      console.log('Error in fetching tasks from db');
      return;
  }
  return res.render('home', //return res.render('home'= it will go to views folder and find home.ejs        
    {
        title: 'TO DO TASKS',//then it will pass these keys to response.locals or res.locals
        task_list: tasks
    });  
});
});


//adding tasks
app.post('/create-task', function (req, res) {
    console.log(req.body);
    dateNew = new Date(req.body.due_date);
    Task.create({
        description:req.body.description,
        date: dateNew.getDate(),
        day: dateNew.getDay(),
        month: dateNew.getMonth(),
        year: dateNew.getFullYear(),
        category: req.body.category,
        priority: req.body.priority
         
    },function(err, newTask){
        if(err){
            console.log('error in creating a task' );
            return;
          }
            console.log('********',newTask);
            res.redirect('back');
        
    });
  });

  // for deleting a task
  app.get('/delete-task/',function(req,res){
  // get the id from querry in the url
    let id = req.query.id;
  //find the task  in the database using id and delete
    Task.findByIdAndDelete(id,function(err){
        if(err){
          console.log('error in deleting the task');
          return;
          }
          return res.redirect('back');
        });
      
});
  

app.listen(port, function (err) {// tell app to listen on this port
    if (err) {//error is handeled here
        console.log("error found", err);
        return;
    }
    else
    {
        console.log("express server is running", port);
    }
    
  });                                                                                                                                                                                                                                                                                                                                                                                                                                                   