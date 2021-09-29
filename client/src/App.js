import "./App.css";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router";
import { routes } from "./components/routes";
import NavBar from "./components/NavBar.js";
import NoMatch from "./components/NoMatch";
import Register from "./components/Register";
import Login from "./components/Login";
import FetchUser from "./components/FetchUser";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
const renderRoutes = () => {
  return routes.map((route)=> (
    <Route exact path = {route.pathname} component={route.component} />
  ))
}




  return (
    <>
      <NavBar />
      <FetchUser>
        <Container>
          <Switch>
            {renderRoutes()}
            <Route exact path = "/register" component={Register} />
            <Route exact path = "/login" component={Login} />
            <Route component={NoMatch} />
          </Switch>
        </Container>
      </FetchUser>
    </>
  );
}

export default App;