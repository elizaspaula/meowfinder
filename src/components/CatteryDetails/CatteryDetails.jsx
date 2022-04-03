import axios from "axios";
import { useState, useEffect } from "react";
import "./CatteryDetails.scss";
import checkIcon from "../../assets/icons/circle-check-solid.svg";
import HeaderHav from "../HeaderNav/HeaderNav";
import Footer from "../Footer/Footer";

function CatteryDetails(props) {
  const [catteryDetails, setCatteryDetails] = useState({});
  const currentID = props.match.params.id;

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
                  <a
                    href={`${process.env.REACT_APP_API_URL}/uploads/${catteryDetails.document}`}
                    className="cattery-details__button save-btn btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Documents
                  </a>

                  <a
                    className="cattery-details__button cancel-btn btn"
                    href={`mailto:${catteryDetails.email}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Send email
                  </a>
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
                  <span className="cattery-details__label"> Website:</span>{" "}
                  {catteryDetails.website}
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
            <div className="cattery-cards">
              {catteryDetails.picture?.map((photo) => (
                <div class="cattery-cards__card">
                  <img
                    className="cattery-cards__img"
                    src={`${process.env.REACT_APP_API_URL}/uploads/${photo}`}
                    alt="cat"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default CatteryDetails;
