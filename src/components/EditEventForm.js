import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom"


function EditEventForm({ event_id, name, date, time }) {
  let history = useHistory()
  const [errors, setErrors] = useState([])
  const [formData, setFormData] = useState({
    name: `${name}`,
    date: `${date}`,
    time: `${time}`,
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e){
      e.preventDefault();
      const updatedEvent = {
          name: formData.name,
          date: formData.date,
          time: formData.time
      };
      const response = await fetch(`http://localhost:4000/events/${event_id}`, {
          method: "PATCH",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedEvent),
      })
      const data = await response.json()
      if (response.ok) {
      history.push('/temp')
      history.goBack()
      } else {
        setErrors(data.errors)
        console.log(data)
      }
  }

  return (
    <div>
      <p>{errors}</p>
      <form onSubmit={handleSubmit}>
        <input name="name" value={formData.name} onChange={handleChange}></input>
        <input name="date" value={formData.date} onChange={handleChange}></input>
        <input name="time" value={formData.time} onChange={handleChange}></input>
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default EditEventForm;
