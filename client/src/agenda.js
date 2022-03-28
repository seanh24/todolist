import Task from './task'
import { useEffect, useState } from 'react'

const Agenda = (props) => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`http://localhost:5000/${props.userId}`, {
      method: "GET",
      headers: { "Content-Type": 'application/json'},
      mode: "cors"
    })
      .then((res) => {
        return res.json()
      })
      .then(data =>  {
        console.log(data)
        setData(data)
      })
      .catch(err => console.log(err))
  },[props.userId])

  return (
    <div className="Agenda">
        { data.map((item, index) => <Task data={item} key={index} userId={props.userId} />) }
    </div>
  );
}

export default Agenda