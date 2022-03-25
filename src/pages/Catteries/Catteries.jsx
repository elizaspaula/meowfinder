import "./Catteries.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import CatteryList from "../../components/CatteryList/CatteryList";

function Catteries() {
  const [catteryList, setCatteryList] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/catteries`).then((response) => {
      setCatteryList(response.data);
    });
  }, []);

  return (
    <>
      <div className="catteries">
        <h1 className="catteries__title">List of Registered Catteries</h1>
        <CatteryList catteryList={catteryList} />
      </div>
    </>
  );
}

export default Catteries;
