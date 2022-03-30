import "./Dashboard.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import emailIcon from "../../assets/icons/envelope-solid.svg";
import locationIcon from "../../assets/icons/locationIcon.svg";
import phoneIcon from "../../assets/icons/phone-solid.svg";
import checkIcon from "../../assets/icons/circle-check-solid.svg";

function Dashboard(props) {
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
      <div className="dashboard">
        <div className="dashboard__header">
          <h1 className="dashboard__title">Welcome to MeowFinder !</h1>
          <Link className="dashboard__add-new">+ Add Cattery</Link>
        </div>
        <div className="dashboard__details">
          <div className="cattery-details">
            <h1 className="cattery-details__title">Olivia Gatil</h1>
            <div className="cattery-details__information">
              <div className="cattery-details__content">
                <img
                  className="cattery-details__icon"
                  src={locationIcon}
                  alt="location icon"
                />
                <p className="cattery-details__address">Address: 22nd street</p>
              </div>
              <div className="cattery-details__content">
                <img
                  className="cattery-details__icon"
                  src={phoneIcon}
                  alt="phone icon"
                />
                <p className="cattery-details__address">Phone: 778-888-888</p>
              </div>
              <div className="cattery-details__content">
                <img
                  className="cattery-details__icon"
                  src={emailIcon}
                  alt="email icon"
                />
                <p className="cattery-details__address">
                  Email: email@email.com
                </p>
              </div>
              <div className="dashboard-details__btn">
                <Link
                  to={`/admin/edit/${currentID}`}
                  className="dashboard-details__edit"
                >
                  Edit
                </Link>
                <Link className="dashboard-details__delete">Delete</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
