var express = require('express');
const router = express.Router();
const routeController = require('../controler/Controls')

// Login post used so data could be sent in req body
router.post('/login', routeController.postLogin)
/* GET home page. */
router.get('/:userId', routeController.getTasks);
// create new user
router.post('/newUser', routeController.postNewUser)
// Post new Task
router.post('/:userId', routeController.postNewTask);
// put/edit tasks
router.put('/:userId/:taskId', routeController.editTask)
// delete task
router.delete('/:userId/:taskId', routeController.deleteTask);


module.exports = router;
