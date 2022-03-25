import axios from "axios";
import { useState, useEffect } from "react";
import "./CatteryDetails.scss";

function CatteryDetails(props) {
  console.log(props);
  const [catteryDetails, setCatteryDetails] = useState({});
  const currentID = props.match.params.id;
  console.log(currentID);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/catteries/${currentID}`)
      .then((response) => {
        console.log(response);
        setCatteryDetails(response.data);
      });
  }, [currentID]);

  return (
    <>
      <h1>{catteryDetails.address}</h1>
    </>
  );
}
export default CatteryDetails;
