import '../App.css';
import { Route, Switch } from "react-router-dom"
import Header from './Header'
import HomePage from './HomePage'
import LoginPage from "./LoginPage"
import Footer from "./Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
