function EventCard({ name, date, time, host, event_id, user }) {
  function handleAttendClick(e) {
    e.preventDefault();
    const newTicket = { user_id: user.id, event_id: event_id };
    fetch("http://localhost:4000/tickets/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTicket),
    })
      .then((r) => r.json())
      .then(console.log("attending event"));
  }
  return (
    <div>
      <h3>{name}</h3>
      <p>
        Hosted by {host} on {date} at {time}.
      </p>
      <p>
        <button onClick={handleAttendClick}>Attend</button>
      </p>
    </div>
  );
}

export default EventCard;
