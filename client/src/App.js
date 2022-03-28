import NewUser from './newUser';
import { useEffect, useState } from 'react';
import Login from './login';
import Agenda from './agenda';
import NewTask from './newTask';
import { Button } from 'react-bootstrap'

function App() {
  const [userId, setUserId] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [showNewTask, setShowNewTask] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [showNewUser, setShowNewUser] = useState(false)

  let userInfo = localStorage.getItem('userId')
  useEffect(() => {
    console.log('test')
    if(userInfo){
      setUserId(userInfo)
      setLoggedIn(true)
    }
  },[])

  const handleLogout = () => {
    localStorage.clear()
    setLoggedIn(false)
  }
  
  const handleShowNewTask = () => {
    showNewTask ? setShowNewTask(false) : setShowNewTask(true) 
  }

  const handleShowLogin = () => {
    showLogin ? setShowLogin(false) : setShowLogin(true) 
  }

  const handleShowNewUser = () => {
    showNewUser ? setShowNewUser(false) : setShowNewUser(true) 
  }

  if (!loggedIn) {
    return (
      <div className="login d-grid gap-2">
        <h1>Agenda</h1>
        <Button size='lg' variant='success' onClick={handleShowLogin} className="login-btn">Login</Button>
        {showLogin ? <Login /> : '' }
        <Button size='lg' onClick={handleShowNewUser} className="new-user-btn">New User</Button>
        {showNewUser ? <NewUser /> : '' }
      </div>
    )
  } else {
    return (
      <div className='App'>
        <div className='header'>
          <div className='hidden'></div>
          <h1>Agenda</h1>
          <Button onClick={handleLogout} variant='danger'>Log out</Button>
        </div>

        <div className='d-grid gap-2'>
          <Button size='lg' onClick={handleShowNewTask} variant='success' className="new-task-btn">New Task</Button>
          {showNewTask ? <NewTask userId={userId} /> : ''}
          <Agenda userId={userId}/>
        </div>
      </div>
    )
  }
}


export default App;
