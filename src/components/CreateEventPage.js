import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"


const BASE_URL = process.env.REACT_APP_BASE_URL


function CreateEventPage({ user }) {
  let history = useHistory();
  const [errors, setErrors] = useState([])
  const [formData, setFormData] = useState({ name: "", date: "", time: "" });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e){
    e.preventDefault();
    const newEvent = {
        name: formData.name,
        date: formData.date,
        time: formData.time,
        hosted_by: user.id
    };
    const response = await fetch(`${BASE_URL}/events`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newEvent),
    })
    const data = await response.json()
    if (response.ok) {
      history.push('/')
    } else {
      setErrors(data.errors)
    }
}

  return (
    <div>
      <p>New Event Hosted by {user.username} </p>
      <p>{errors}</p>
      <form onSubmit={handleSubmit}>
          <input placeholder="Name of Event" name="name" value={formData.name} onChange={handleChange}></input>
          <input placeholder="Date" name="date" value={formData.date} onChange={handleChange}></input>
          <input placeholder="Time" name="time" value={formData.time} onChange={handleChange}></input>
          <input type="submit" value="Host Event!"></input>
      </form>
    </div>
  );
}

export default CreateEventPage;
