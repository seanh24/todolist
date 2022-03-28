const NewTask = (props) => {

    const createTask = async (e) => {
        e.preventDefault()
        let data = {
            taskName: e.target.taskName.value,
            taskDescription: e.target.taskDescription.value
        }
        const response = await fetch(`http://localhost:5000/${props.userId}`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { "Content-Type": 'application/json'},
            mode: "cors"
        })
        const createdTask = await response.json();
        console.log(createdTask)
        window.location.reload(true)
    }

        
    return (
        <div>
            <h3>New Task</h3>
            <form onSubmit={createTask}>
                <label>Task</label>
                <input type="text" name="taskName" />
                <label>Description</label>
                <input type="text" name="taskDescription" />
                <input type="submit" className="submit" />
            </form>
        </div>
    );
}
 
export default NewTask;