import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Catteries from "./pages/Catteries/Catteries";
import Home from "./pages/Home/Home";
import CatteryDetails from "./components/CatteryDetails/CatteryDetails";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import Register from "./components/Register/Register";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import EditCatt from "./components/EditCatt/EditCatt";
import AddCatt from "./components/AddCatt/AddCatt";

function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <div className="page-container">
          <Switch>
            {/* <Redirect path="/" to="/home" exact /> */}
            <Route path="/home" exact component={Home} />
            <Route path="/catteries" exact component={Catteries} />
            <Route
              path="/search/:province/:breed"
              exact
              component={Catteries}
            />
            <Route path="/catteries/:id" exact component={CatteryDetails} />
            <Route path="/admin" exact component={AdminDashboard} />
            <Route path="/admin/register" exact component={Register} />
            <Route path="/admin/login" exact component={Login} />
            <Route path="/admin/logout" exact component={Logout} />
            <Route path="/admin/edit/:id" exact component={EditCatt} />
            <Route path="/admin/add" exact component={AddCatt} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
