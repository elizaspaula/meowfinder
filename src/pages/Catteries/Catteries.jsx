import "./Catteries.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import CatteryList from "../../components/CatteryList/CatteryList";

function Catteries(props) {
  const [catteryList, setCatteryList] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/catteries`).then((response) => {
      setCatteryList(response.data);
    });
  }, []);

  return (
    <>
      <h1>List of Registered Catteries</h1>
      <CatteryList catteryList={catteryList} />
    </>
  );
}

export default Catteries;
