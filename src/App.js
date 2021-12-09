import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalProvider } from "./context/GlobalState";
function App() {
  return (
    <div style={{ maxWidth: "40rem", margin: "4rem auto" }}>
      <GlobalProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/add" component={AddUser} />
            <Route exact path="/edit/:id" component={EditUser} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
