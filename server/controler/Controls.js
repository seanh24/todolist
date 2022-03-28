const User = require('../models/user');
const Task = require('../models/task')

const postLogin = (req, res, next) => {
    let loginInfo = { userName: req.body.userName}
    User.find(loginInfo)
      .then(result => {
        console.log(result)
        if(req.body.userName === result[0].userName && req.body.password === result[0].password) {
          let userInfo = {
            authenticated: true,
            userId: result[0]._id
          }
          return userInfo
        } else {
          let userInfo = {
            authenticated: false,
            userId: ''
          }
          return userInfo
        }
      })
      .then(userInfo => res.send(JSON.stringify(userInfo)))
  };

const getTasks = (req, res, next) => {
    console.log('got request')
    console.log(req.params)
    Task.find({ userName: req.params.userId })
      .then(result => JSON.stringify(result))
      .then(data => {
        res.send(data)
      })
};

const postNewTask =  (req, res, next) => {
    const data = {
      userName: req.params.userId,
      taskName: req.body.taskName,
      description: req.body.taskDescription
    }
    const task = new Task(data)
    task.save()
      .then(() => {
        res.send(JSON.stringify(task))
      })
      .catch(err => console.log(err))
};

const editTask =  (req, res, next) => {
    console.log('edit')
    let taskId = req.params.taskId;
    console.log(req.body)
    Task.findByIdAndUpdate(taskId, {description: req.body.description}, err => {
      if (err) {
        console.log(err)
      } else {
        console.log('edit success')
      }
    })    
};

const deleteTask = (req, res, next) => {
    console.log('delete')
    let taskId = req.params.taskId;
    console.log(taskId)
    Task.findByIdAndDelete(taskId, (err) => {
      if (err) {
        console.log(err)
      } else {
        console.log('item deleted')
        res.send('item deleted')
      }
    });
};

const postNewUser = (req, res, next) => {
    console.log(req.body)
    const user = new User(req.body)
    user.save()
      .then(() => {
        let answer = {
            success: true,
            user: user
        }
        res.send(JSON.stringify(answer))
      })
      .catch(err => {
          console.log(err)
          res.send(JSON.stringify({error: err.errors.password.kind}))
      }) 
};

module.exports = {
    postLogin,
    getTasks,
    postNewTask,
    editTask,
    deleteTask,
    postNewUser
}