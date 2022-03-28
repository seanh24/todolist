import { useEffect, useState } from "react";

const NewUserMessage = (props) => {
    const [message, setMessage] = useState('')
    
    useEffect(() => {
        setMessage(props.message)
    },[props.message])

    return (
        <div>
            <br />
            <h6>{message}</h6>
        </div>
    );
}
 
export default NewUserMessage;
