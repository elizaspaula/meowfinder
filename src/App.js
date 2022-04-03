import "./App.css";
import {
  BrowserRouter,
  Switch,
  Route,
  Navigate,
  Redirect,
} from "react-router-dom";
import Catteries from "./pages/Catteries/Catteries";
import Home from "./pages/Home/Home";
import CatteryDetails from "./components/CatteryDetails/CatteryDetails";
import Register from "./components/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import EditCatt from "./components/EditCatt/EditCatt";
import AddCatt from "./components/AddCatt/AddCatt";
import Login from "./components/Login/Login";

function App() {
  const authToken = sessionStorage.getItem("authToken");

  return (
    <BrowserRouter>
      <main className="page">
        <div className="page-container">
          <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/catteries" exact component={Catteries} />
            <Route path="/catteries/:id" exact component={CatteryDetails} />
            <Route
              path="/search/:province/:breed"
              exact
              component={Catteries}
            />
            <Route path="/signup" exact component={Register} />
            <Route path="/login" exact component={Login} />
            {authToken ? (
              <>
                <Route path="/admin" exact component={Dashboard} />
                <Route path="/admin/edit/:id" exact component={EditCatt} />
                <Route path="/admin/add" exact component={AddCatt} />
              </>
            ) : (
              <Redirect to="/login" />
            )}
          </Switch>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
