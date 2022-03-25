import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Catteries from "./pages/Catteries/Catteries";
import Home from "./pages/Home/Home";
import CatteryDetails from "./components/CatteryDetails/CatteryDetails";
import HeaderHav from "./components/HeaderNav/HeaderNav";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <HeaderHav />
        <div className="page-container">
          <Switch>
            {/* <Redirect path="/" to="/home" exact /> */}
            <Route path="/home" exact component={Home} />
            <Route path="/catteries" exact component={Catteries} />
            <Route path="/catteries/:id" exact component={CatteryDetails} />
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
