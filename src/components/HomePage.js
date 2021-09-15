import { Link } from "react-router-dom"
import MyEventContainer from "./MyEventContainer";
import MyTicketsContainer from "./MyTicketsContainer";
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
          </Link> or &nbsp;
          <Link
            to={{
              pathname: "/find-event",
              state: {
                user: user,

              },
            }}
          >
            Find Event to Attend
          </Link>
        </p>
      </div>
      <div>
        <h1>My Hosted Events:</h1>
        <MyEventContainer user={user} />
      </div>
      <div>
        <h1>Events I'm attending:</h1>
        <MyTicketsContainer user={user} />
      </div>
    </div>
  );
}

export default HomePage;
