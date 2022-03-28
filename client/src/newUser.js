import { useState } from "react";
import NewUserMessage from "./ newUserMessage";

const NewUser = () => {
    const [message, setMessage] = useState('');

    const createUser = async (e) => {
        e.preventDefault()
        let data = {
            userName: e.target.userName.value,
            password: e.target.password.value
        };
        const response = await fetch("http://localhost:5000/newUser", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { "Content-Type": 'application/json'},
            mode: "cors"
        })
        const userInfo = await response.json()
        console.log(userInfo)
        if(userInfo.hasOwnProperty('error')) {
            switch(userInfo.error) {
                case 'minlength': 
                    setMessage('password is too short')
                    break
                case 'maxlength':
                    setMessage('password is too long')
                    break
                default:
                    setMessage('something went wrong')
                    break
            }
        } else {
            setMessage('Account Creation Successful, you can now login!')
            e.target.reset()
        }
        return userInfo
    }

    return (
        <div>
            <form onSubmit={createUser}>
                <label htmlFor="">Username</label>
                <input type="text" name="userName" />
                <label htmlFor="">Password</label>
                <input type="text" name="password" />
                <input type="submit" />
            </form>
            <NewUserMessage message={message}/>
        </div>
        
    );
}
 
export default NewUser;