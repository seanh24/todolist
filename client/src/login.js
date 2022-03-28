import { Button } from 'react-bootstrap'

const Login = (props) => {
    
    const handleLogin = (e) => {
        e.preventDefault()
        const loginInfo = {
            userName: e.target.userName.value,
            password: e.target.password.value
        }
        fetch(`http://localhost:5000/login`, {
            method: "POST",
            headers: { "Content-Type": 'application/json'},
            body: JSON.stringify(loginInfo),
            mode: "cors"
        })
            .then((res) => {
                return res.json()
            })
            .then(data =>  {
                console.log(data)
                if(data.authenticated) {
                    localStorage.setItem('userId', data.userId)
                    window.location.reload(true)
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <label htmlFor="userName">Username</label>
                <input type="text" name="userName" />
                <label htmlFor="password">Password</label>
                <input type="text" name="password" />
                <Button type="submit">Login</Button>
            </form>
        </div>
    );
}
 
export default Login;