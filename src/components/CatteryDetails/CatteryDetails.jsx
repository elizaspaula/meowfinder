import axios from "axios";
import { useState, useEffect } from "react";
import "./CatteryDetails.scss";
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

              <div className="cattery-details__group-header">
                <div className="cattery-details__registry">
                  <img
                    src={checkIcon}
                    alt="certified icon"
                    className="cattery-details__icon"
                  />

                  <h3 className="cattery-details__status">
                    {catteryDetails.registry}
                  </h3>
                </div>
                <div className="cattery-details__buttons">
                  <input
                    className="cattery-details__button save-btn btn"
                    type="button"
                    value="Documents"
                  />

                  <input
                    className="cattery-details__button cancel-btn btn"
                    type="button"
                    value="Contact us"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="cattery-details__group">
            <div className="cattery-details__information">
              <h3 className="cattery-details__subtitle">Location </h3>
              <div className="cattery-details__content">
                <p className="cattery-details__text">
                  <span className="cattery-details__label"> Address: </span>{" "}
                  {catteryDetails.address}
                </p>

                <p className="cattery-details__text">
                  <span className="cattery-details__label city"> City:</span>{" "}
                  {catteryDetails.city}
                </p>

                <p className="cattery-details__text">
                  <span className="cattery-details__label">Province:</span>{" "}
                  {catteryDetails.province}
                </p>
              </div>
            </div>
            <div className="cattery-details__contact">
              <h3 className="cattery-details__subtitle">Contact Information</h3>
              <div className="cattery-details__content">
                <p className="cattery-details__text">
                  <span className="cattery-details__label"> Name: </span>{" "}
                  {catteryDetails.name}
                </p>
                <p className="cattery-details__text">
                  <span className="cattery-details__label"> Phone: </span>{" "}
                  {catteryDetails.phone}
                </p>
                <p className="cattery-details__text">
                  <span className="cattery-details__label"> Email:</span>{" "}
                  {catteryDetails.email}
                </p>
              </div>
            </div>
          </div>

          <div className="cattery-details__about">
            <h3 className="cattery-details__subtitle">
              About {catteryDetails.catteryName}
            </h3>
            <p className="cattery-details__description">
              {catteryDetails.description}
            </p>
          </div>
          <div className="cattery-details__gallery">
            <h3 className="cattery-details__subtitle">Gallery</h3>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default CatteryDetails;
