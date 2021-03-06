import { useState } from "react"
import EditEventForm from "./EditEventForm";

const BASE_URL = process.env.REACT_APP_BASE_URL

function MyEventCard({ name, date, time, event_id, onDeleteEvent }) {
    const [hideEditForm, setHideEditForm] = useState(true);

    function handleEditClick() {
        setHideEditForm((hideEditForm) => !hideEditForm);
    }

    function handleDeleteClick() {
        fetch(BASE_URL + `/events/${event_id}`, {
            method: "DELETE",
        })
        .then((r) => r.json())
        .then(() => {
            onDeleteEvent(event_id)
        })
    }

    return (
        <div>
            <h3>{name}</h3>
            <p>On {date} at {time}.</p>
            <button onClick={handleEditClick}>Edit Event</button>
            <button onClick={handleDeleteClick}>Cancel Event</button>
            {hideEditForm ? null : <EditEventForm event_id={event_id} name={name} date={date} time={time} />}
        </div>
    )
}

export default MyEventCard;