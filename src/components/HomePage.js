import {useEffect, useState } from "react"
import { Link } from "react-router-dom"
import MyEventContainer from "./MyEventContainer";
function HomePage({ user }) {


  return (
    <div>
      <div>
        <p>Welcome back, {user.username}!</p>
        <p>
          <Link
            to={{
              pathname: "/create-event",
              state: {
                user: user,

              },
            }}
          >
            Host New Event
          </Link>
        </p>
      </div>
      <div>
        <h3>My Hosted Events:</h3>
        <MyEventContainer user={user} />
      </div>
      <div>
        <h3>Events I'm attending:</h3>
      </div>
    </div>
  );
}

export default HomePage;
