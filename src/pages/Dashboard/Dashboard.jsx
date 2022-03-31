import "./Dashboard.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Footer from "../../components/Footer/Footer";

function Dashboard() {
  const [catteryList, setCatteryList] = useState([]);
  const { register, handleSubmit } = useForm({});
  const authToken = sessionStorage.getItem("authToken");

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

  const onSubmit = (data) => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/admin/cattery/${data.id}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
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
            <Link to={`/home`} className="dashboard__logout btn">
              Logout
            </Link>
          </div>
        </nav>
        <ul className="dashboard-list">
          {catteryList.map((cattery) => (
            <li className="dashboard-list__item" key={cattery.id}>
              <div className="dashboard-list__card">
                <h3 className="dashboard-list__title">{cattery.catteryName}</h3>
                <p className="dashboard-list__text-first">{cattery.address}</p>
                <p className="dashboard-list__text">{cattery.city}</p>
                <p className="dashboard-list__text">{cattery.country}</p>
                <div className="dashboard-list__btn">
                  <Link
                    to={`/admin/edit/${cattery.id}`}
                    className="dashboard-list__button btn"
                  >
                    Edit
                  </Link>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                      value={cattery.id}
                      type="hidden"
                      {...register("id")}
                    />
                    <button
                      className="dashboard-list__delete btn"
                      type="submit"
                    >
                      Delete
                    </button>
                  </form>
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
