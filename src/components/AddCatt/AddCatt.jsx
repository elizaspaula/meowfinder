import "./AddCatt.scss";
import backArrow from "../../assets/icons/chevronleft.svg";
import { Link } from "react-router-dom";

function AddCatt() {
  return (
    <>
      <div className="header-box">
        <div className="header-box__subheader">
          <Link to="/admin">
            <img
              className="header-box__icon"
              src={backArrow}
              alt="back arrow"
            />
          </Link>
          <h2 className="header-box__text">Add New Cattery</h2>
        </div>
        <form className="cattery-form">
          <div className="details__container">
            <h3 className="details__subheader">Cattery Information</h3>
            <div className="details__form">
              <label htmlFor="catteryname" className="details__label label">
                Cattery Name
              </label>
              <input
                type="text"
                className="details__input"
                placeholder="Cattery Name"
                id="catteryname"
                name="catteryname"
              />
              <label htmlFor="catteryaddress" className="details__label label">
                Cattery Address
              </label>
              <input
                type="text"
                className="details__input"
                placeholder="Enter the address"
                id="catteryaddress"
                name="catteryaddress"
              />
              <label htmlFor="catterycountry" className="details__label label">
                Cattery Country
              </label>
              <select className="details__select">
                <option value="Select">Select</option>
                <option value="Canada">Canada</option>
              </select>
              <label htmlFor="catterycountry" className="details__label label">
                Cattery Province
              </label>
              <select className="details__select">
                <option value="Select">Select</option>
                <option value="British Columbia">British Columbia</option>
                <option value="Alberta">Alberta</option>
                <option value="Manitoba">Manitoba</option>
                <option value="Quebec">Quebec</option>
              </select>

              <label htmlFor="catterycity" className="details__label label">
                Cattery City
              </label>
              <input
                type="text"
                className="details__input"
                placeholder="Enter the City"
                id="catterycity"
                name="catterycity"
              />

              <label htmlFor="catteryname" className="details__label label">
                Cattery Phone
              </label>
              <input
                type="text"
                className="details__input"
                placeholder="Cattery Name"
                id="catteryname"
                name="catteryname"
              />
              <label htmlFor="catteryname" className="details__label label">
                Cattery Name
              </label>
              <input
                type="text"
                className="details__input"
                placeholder="Cattery Name"
                id="catteryname"
                name="catteryname"
              />
              <label htmlFor="catteryname" className="details__label label">
                Cattery Email
              </label>
              <input
                type="text"
                className="details__input"
                placeholder="Cattery Name"
                id="catteryname"
                name="catteryname"
              />
              <label htmlFor="catteryname" className="details__label label">
                Website
              </label>
              <input
                type="text"
                className="details__input"
                placeholder="Cattery Name"
                id="catteryname"
                name="catteryname"
              />
              <label htmlFor="catteryname" className="details__label label">
                Facebook
              </label>
              <input
                type="text"
                className="details__input"
                placeholder="Cattery Name"
                id="catteryname"
                name="catteryname"
              />
              <label htmlFor="catteryname" className="details__label label">
                Instagram
              </label>
              <input
                type="text"
                className="details__input"
                placeholder="Cattery Name"
                id="catteryname"
                name="catteryname"
              />
              <label htmlFor="catteryname" className="details__label label">
                Cattery Description
              </label>
              <textarea
                type="text"
                className="details__input"
                placeholder="Cattery Name"
                id="catteryname"
                name="catteryname"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddCatt;
