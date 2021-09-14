import { useEffect, useState } from "react"
import EditEventForm from "./EditEventForm";

function MyEventCard({ name, date, time, event_id }) {
    const [hideEditForm, setHideEditForm] = useState(true);
    function handleEditClick() {
        setHideEditForm((hideEditForm) => !hideEditForm);
    }

    return (
        <div>
            <h3>{name}</h3>
            <p>On {date} at {time}.</p>
            <button onClick={handleEditClick}>Edit Event</button>
            <button>Cancel Event</button>
            {hideEditForm ? null : <EditEventForm event_id={event_id} />}
        </div>
    )
}

export default MyEventCard;