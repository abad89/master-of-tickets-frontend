function MyTicketCard({ ticket }) {
    return (
        <div>
            <h3>{ticket.event.name}</h3>
            <p>Hosted by {ticket.event.hosted_by} on {ticket.event.date} at {ticket.event.time}.</p>
        </div>
    )
}

export default MyTicketCard