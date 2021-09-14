import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"

function CreateEventPage({ user }) {
    let history = useHistory();
  const [formData, setFormData] = useState({ name: "", date: "", time: "" });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e){
    e.preventDefault();
    const newEvent = {
        name: formData.name,
        date: formData.date,
        time: formData.time,
        hosted_by: user.id
    };
    fetch("http://localhost:4000/events", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newEvent),
    })
    .then((r) => r.json());
    history.push('/')
}

  return (
    <div>
      <p>New Event Hosted by {user.username} </p>
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
