import { useState, useEffect } from "react";
import MyEventCard from "./MyEventCard";

function MyEventContainer({ user }) {
  const [myEventList, setMyEventList] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:4000/users/${user.id}/events`)
        .then((r) => r.json())
        .then(setMyEventList);
    }
  }, []);

    const MyEventsItem = myEventList.map((event) => (
        <MyEventCard key={event.id} name={event.name} date={event.date} time={event.time} />
    ))

  return (
    <div>
      {MyEventsItem}
    </div>
  );
}

export default MyEventContainer;
