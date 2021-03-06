import { useState, useEffect } from "react";
import MyEventCard from "./MyEventCard";

const BASE_URL = process.env.REACT_APP_BASE_URL

function MyEventContainer({ user }) {
  const [myEventList, setMyEventList] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(BASE_URL + `/users/${user.id}/events`)
        .then((r) => r.json())
        .then(setMyEventList);
    }
  }, []);

  function handleDeleteEvent(event_id) {
    const updatedMyEventList = myEventList.filter((userEvent) => userEvent.id !== event_id)
    setMyEventList(updatedMyEventList)
  }

  const MyEventsItem = myEventList
    .sort((a, b) => (a.date > b.date ? 1 : -1))
    .map((event) => (
      <MyEventCard
        key={event.id}
        event_id={event.id}
        name={event.name}
        date={event.date}
        time={event.time}
        onDeleteEvent={handleDeleteEvent}
      />
    ));

  return <div>{MyEventsItem}</div>;
}

export default MyEventContainer;
