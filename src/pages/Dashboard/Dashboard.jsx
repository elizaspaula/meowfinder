import "./Dashboard.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

function Dashboard() {
  const [catteryList, setCatteryList] = useState([]);
  const authToken = sessionStorage.getItem("authToken");
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/admin`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((response) => {
        setCatteryList(response.data);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/admin/cattery/${id}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((data) => {
        history.go(0);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogout = () => {
    sessionStorage.removeItem("authToken");
    history.push("/home");
  };

  return (
    <>
      <div className="dashboard">
        <nav className="dashboard__nav">
          <h3 className="dashboard__title">Welcome to MeowFinder!</h3>
          <div className="dashboard__links">
            <Link to={`/admin/add`} className="dashboard__add-new btn">
              + Add New
            </Link>
            <button onClick={handleLogout} className="dashboard__logout btn">
              Logout
            </button>
          </div>
        </nav>
        <ul className="dashboard-list">
          {catteryList.map((cattery) => (
            <li className="dashboard-list__item" key={cattery.id}>
              <div className="dashboard-list__card">
                <div className="dashboard-list__header">
                  <h2 className="dashboard-list__title">
                    {cattery.catteryName}
                  </h2>
                  <h3 className="dashboard-list__breed">{cattery.breed}</h3>
                </div>

                <h3 className="dashboard-list__subtitle">Location</h3>
                <div className="dashboard-list__information">
                  <div className="dashboard-list__content">
                    <p className="dashboard-list__label"> Address:</p>
                    <p className="dashboard-list__label"> City:</p>
                    <p className="dashboard-list__label"> Province:</p>
                  </div>

                  <div className="dashboard-list__content">
                    <p className="dashboard-list__text">{cattery.address}</p>
                    <p className="dashboard-list__text">{cattery.city}</p>
                    <p className="dashboard-list__text">{cattery.province}</p>
                  </div>
                </div>

                <div className="dashboard-list__btn">
                  <Link
                    to={`/admin/edit/${cattery.id}`}
                    className="dashboard-list__button btn"
                  >
                    Edit
                  </Link>

                  <button
                    className="dashboard-list__delete btn"
                    type="submit"
                    onClick={() => handleDelete(cattery.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <Footer />
      </div>
    </>
  );
}

export default Dashboard;
