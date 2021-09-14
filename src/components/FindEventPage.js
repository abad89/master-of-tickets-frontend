import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import EventCard from "./EventCard";

function FindEventPage({ user }) {
  const [eventsList, setEventsList] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:4000/events`)
        .then((r) => r.json())
        .then(setEventsList);
    }
  }, []);

  const EventsItem = eventsList.map((event) => (
      <EventCard key={event.id} event_id={event.id} name={event.name} date={event.date} time={event.time} host={event.hosted_by} user={user} />
  ))

  return (
    <div>
      <p>Searching for events as {user.username}.</p>
      <p>
          <Link
            to={{
              pathname: "/",
              state: {
                user: user,

              },
            }}
          >
            Home
          </Link>
        </p>
      {EventsItem}
    </div>
  );
}
export default FindEventPage;
