import { useState, useEffect } from "react";
import MyTicketCard from "./MyTicketCard";

function MyTicketsContainer({ user }) {
  const [myTicketsList, setMyTicketsList] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:4000/users/${user.id}/tickets`)
        .then((r) => r.json())
        .then(setMyTicketsList);
    }
  }, []);

  const MyTicketsItem = myTicketsList.map((ticket) => (
      <MyTicketCard key={ticket.id} ticket={ticket} />
  ))

  return (
    <div>
          {MyTicketsItem}
    </div>
  );
}

export default MyTicketsContainer;
