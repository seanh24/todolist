import { Card, Button } from "react-bootstrap";
import { useState } from "react";
import { FaTrashAlt, FaCheck } from "react-icons/fa"
import { MdMode } from "react-icons/md"

const Task = (prop) => {

    const [edit, setEdit] = useState(false)

    const handleDelete = async (e) => {
        const response = await fetch(`http://localhost:5000/${prop.userId}/${prop.data._id}`, {
            method: 'DELETE',
            headers: { "Content-Type": 'application/json'},
            mode: "cors"
        })
        console.log(response)
        window.location.reload(true)
    };

    const onEdit = () => {
        if (edit) {
            setEdit(false)
        } else {
            setEdit(true)
        }
    }

    const handleEdit = async (e) => {

        let data = {description: e.target.description.value}
        const response = await fetch(`http://localhost:5000/${prop.userId}/${prop.data._id}`, {
            method: 'PUT',
            headers: { "Content-Type": 'application/json'},
            body: JSON.stringify(data),
            mode: "cors"
        })
        console.log(response)
        window.location.reload(true) 
    }

    return (
        <Card>
            <Card.Body>
            <Card.Title>{prop.data.taskName}</Card.Title>
            <Card.Text>{prop.data.description}</Card.Text>
            {edit ? 
            <form onSubmit={handleEdit}>
                <label htmlFor="description">New Description</label>
                <input type="text" name="description"/>
                <Button type="submit" variant="outline-success"><FaCheck /></Button>
            </form> : ''
            }
            <Button variant='outline-info' onClick={onEdit}><MdMode /></Button>
            
            <span> </span>
            <Button variant='outline-danger' onClick={handleDelete}><FaTrashAlt /></Button>
            </Card.Body>
        </Card>
    );
}
 
export default Task