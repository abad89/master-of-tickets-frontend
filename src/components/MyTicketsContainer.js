import { useState, useEffect } from "react";
import MyTicketCard from "./MyTicketCard";

const BASE_URL = process.env.REACT_APP_BASE_URL

function MyTicketsContainer({ user }) {
  const [myTicketsList, setMyTicketsList] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(BASE_URL + `/users/${user.id}/tickets`)
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
