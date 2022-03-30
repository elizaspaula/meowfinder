import "./Catteries.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import CatteryList from "../../components/CatteryList/CatteryList";
import HeaderHav from "../../components/HeaderNav/HeaderNav";
import Footer from "../../components/Footer/Footer";

function Catteries(props) {
  const [catteryList, setCatteryList] = useState([]);
  const { breed, province } = props.match.params;

  useEffect(() => {
    if (breed && province) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/catteries/${breed}/${province}`)
        .then((response) => {
          setCatteryList(response.data);
        });
    } else {
      axios
        .get(`${process.env.REACT_APP_API_URL}/catteries`)
        .then((response) => {
          setCatteryList(response.data);
        });
    }
  }, []);

  return (
    <>
      <HeaderHav firstLink="Home" secondLink="Listing" />
      <div className="catteries">
        <h1 className="catteries__title">List of Registered Catteries</h1>
        <CatteryList catteryList={catteryList} />
      </div>
      <Footer />
    </>
  );
}

export default Catteries;
