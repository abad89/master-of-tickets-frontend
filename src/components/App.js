import '../App.css';
import { useState, useEffect } from "react"
import { Route, Switch } from "react-router-dom"
import Header from './Header'
import HomePage from './HomePage'
import LoginPage from "./LoginPage"
import Footer from "./Footer"

function App() {
  // Auth
  const [user, setUser] = useState(null)
  useEffect(() => {
    fetch("http://localhost:4000/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);


  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/">
          <HomePage user={user} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
