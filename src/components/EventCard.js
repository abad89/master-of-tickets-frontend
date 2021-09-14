function EventCard({ name, date, time, host }) {
    return (
        <div>
            <h3>{name}</h3>
            <p>Hosted by {host} on {date} at {time}.</p>
        </div>
    )
}

export default EventCard;