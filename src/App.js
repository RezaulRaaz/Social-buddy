import React from "react";
import { BrowserRouter as Router ,Switch,Route} from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";
import Home from "./Components/Home/Home";
import Details from "./Components/Details/Details";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Router>
        <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
          <Route exact path="/post">
            <Home></Home>
          </Route>
          <Route exact  path="/post/:id">
            <Details></Details>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
