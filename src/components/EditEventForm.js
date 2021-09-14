import { useEffect, useState } from "react";

function EditEventForm({ event_id, name, date, time }) {
//   const [formData, setFormData] = useState({
//     name: `${name}`,
//     date: `${date}`,
//     time: `${time}`,
//   });

//   function handleChange(e) {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   }

//   function handleSubmit(e){
//       e.preventDefault();
//       const updatedEvent = {
//           name: formData.name,
//           date: formData.date,
//           time: formData.time
//       };
//       fetch(`http://localhost:4000/events/${event_id}`, {
//           method: "PATCH",
//           headers: {
//               "Content-Type": "application/json",
//           },
//           body: JSON.stringify(updatedEvent),
//       })
//       .then((r) => r.json())
//   }

  return (
    <div>
        <p>this event is {name} {date} {time}</p>
      {/* <form onSubmit={handleSubmit}>
        <input name="name" value={formData.name} onChange={handleChange}></input>
        <input name="date" value={formData.date} onChange={handleChange}></input>
        <input name="time" value={formData.time} onChange={handleChange}></input>
        <input type="submit"></input>
      </form> */}
    </div>
  );
}

export default EditEventForm;
