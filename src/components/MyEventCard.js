function MyEventCard({ name, date, time }) {
    return (
        <div>
            <h3>{name}</h3>
            <p>On {date} at {time}.</p>
        </div>
    )
}

export default MyEventCard;