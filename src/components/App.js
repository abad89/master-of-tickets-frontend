import "../App.css";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import HomePage from "./HomePage";
import UserSelect from "./UserSelect";
import CreateEventPage from "./CreateEventPage";
import FindEventPage from "./FindEventPage";
import Footer from "./Footer";

const BASE_URL = process.env.REACT_APP_BASE_URL

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [userList, setUserList] = useState([]);
  const [loggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    fetch(BASE_URL + "/users")
      .then((r) => r.json())
      .then(setUserList);
  }, []);

  function handleChangeUser(user) {
    if (currentUser) {
      handleLogIn();
    }
    setCurrentUser(user);
    console.log("handleChangeUser", currentUser);
  }
  function handleDeleteUser(userToDelete) {
    const updatedUserList = userList.filter(
      (user) => user.id !== userToDelete.id
    );
    setUserList(updatedUserList);
  }

  function handleAddUser(userToAdd) {
    const updatedUserList = [...userList, userToAdd];
    setUserList(updatedUserList);
  }

  function handleLogIn() {
    setLoggedIn((loggedIn) => !loggedIn);
  }

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/create-event">
          <CreateEventPage user={currentUser} />
        </Route>
        <Route exact path="/find-event">
          <FindEventPage user={currentUser} />
        </Route>
        <Route exact path="/">
          <div className="container">
            {loggedIn ? (
              <UserSelect
                userList={userList}
                onChangeUser={handleChangeUser}
                onChangeHideUserList={handleLogIn}
                onDeleteUser={handleDeleteUser}
                onAddUser={handleAddUser}
              />
            ) : null}
          </div>
          {loggedIn ? null : <HomePage user={currentUser} />}
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
