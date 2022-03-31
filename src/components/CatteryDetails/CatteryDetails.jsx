import axios from "axios";
import { useState, useEffect } from "react";
import "./CatteryDetails.scss";
import emailIcon from "../../assets/icons/envelope-solid.svg";
import locationIcon from "../../assets/icons/locationIcon.svg";
import phoneIcon from "../../assets/icons/phone-solid.svg";
import checkIcon from "../../assets/icons/circle-check-solid.svg";
import HeaderHav from "../HeaderNav/HeaderNav";
import Footer from "../Footer/Footer";

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
      <HeaderHav firstLink="Home" secondLink="Listing" />
      <div className="cattery-details">
        <div className="cattery-details__wrapper">
          <div className="cattery-details__header">
            <div className="cattery-details__subheader">
              <h1 className="cattery-details__title">
                {catteryDetails.catteryName}
              </h1>
            </div>

            <div className="cattery-details__information">
              <div className="cattery-details__content">
                <img
                  src={checkIcon}
                  alt="certified icon"
                  className="cattery-details__icon"
                />
                <p className="cattery-details__label">TICA Registered</p>
              </div>
              <div className="cattery-details__content">
                <img
                  className="cattery-details__icon"
                  src={locationIcon}
                  alt="location icon"
                />
                <p className="cattery-details__address">
                  Address: {catteryDetails.address}
                </p>
              </div>
              <div className="cattery-details__content">
                <img
                  className="cattery-details__icon"
                  src={phoneIcon}
                  alt="phone icon"
                />
                <p className="cattery-details__address">
                  City: {catteryDetails.city}
                </p>
              </div>
              <div className="cattery-details__content">
                <img
                  className="cattery-details__icon"
                  src={emailIcon}
                  alt="email icon"
                />
                <p className="cattery-details__address">
                  Province: {catteryDetails.province}
                </p>
              </div>
            </div>
          </div>

          <div className="cattery-details__contact">
            <h2 className="cattery-details__subtitle">Contact Information</h2>
            <p className="cattery-details__name">Name: {catteryDetails.name}</p>
            <p className="cattery-details__name">
              Phone: {catteryDetails.phone}
            </p>
            <p className="cattery-details__name">
              Email: {catteryDetails.email}
            </p>
          </div>
          <div className="cattery-details__about">
            <h2 className="cattery-details__subtitle">
              About {catteryDetails.catteryName}
            </h2>
            <p className="cattery-details__description">
              {catteryDetails.description}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default CatteryDetails;
