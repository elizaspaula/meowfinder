import "./AddCatt.scss";
import backArrow from "../../assets/icons/chevronleft.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function AddCatt() {
  const [catteryname, setCatteryname] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [breed, setBreed] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [data, setData] = useState(null);

  const handleSubmit = (e) => {
    console.log(e);
    const newCattery = {
      id: uuidv4(),
      catteryName: catteryname,
      address: address,
      country: country,
      province: province,
      city: city,
      breed: breed,
      description: description,
      name: name,
      phone: phone,
      email: email,
      website: website,
      facebook: facebook,
      instagram: instagram,
    };

    axios
      .post(`${process.env.REACT_APP_API_URL}/catteries`, newCattery)
      .then((res) => {
        setData(res.postData);
        setCatteryname("");
        setAddress("");
        setProvince("");
        setCity("");
        setBreed("");
        setDescription("");
        setName("");
        setPhone("");
        setEmail("");
        setWebsite("");
        setFacebook("");
        setInstagram("");
      });
  };

  return (
    <div className="page-wrapper">
      <div className="header-wrapper">
        <div className="header-wrapper__subheader">
          <Link to="/admin">
            <img
              className="header-wrapper__icon"
              src={backArrow}
              alt="back arrow"
            />
          </Link>
          <h1 className="header-wrapper__text">Add New Cattery</h1>
        </div>
        <form className="cattery-form" onSubmit={handleSubmit}>
          <div className="details__container">
            <div className="details__form">
              <div className="details__header">
                <h2 className="details__subheader">Cattery Information</h2>{" "}
              </div>
              <label htmlFor="catteryname" className="details__label label">
                Cattery Name
              </label>
              <input
                type="text"
                className="details__input"
                value={catteryname}
                placeholder="Cattery Name"
                id="catteryname"
                name="catteryname"
                onChange={(e) => setCatteryname(e.target.value)}
                required
              />
              <label htmlFor="address" className="details__label label">
                Address
              </label>
              <input
                type="text"
                value={address}
                className="details__input"
                placeholder="Enter the address"
                id="address"
                name="address"
                onChange={(e) => setAddress(e.target.value)}
                required
              />
              <label htmlFor="country" className="details__label label">
                Country
              </label>
              <select
                className="details__select"
                onChange={(e) => setCountry(e.target.value)}
                name="country"
                id="country"
                value={country}
                required
              >
                <option value="Canada">Canada</option>
              </select>
              <label htmlFor="province" className="details__label label">
                Province
              </label>
              <select
                className="details__select"
                onChange={(e) => setProvince(e.target.value)}
                name="province"
                id="province"
                value={province}
                required
              >
                <option value="Select">Please select the Province...</option>
                <option value="British Columbia">British Columbia</option>
                <option value="Alberta">Alberta</option>
                <option value="Manitoba">Manitoba</option>
                <option value="Quebec">Quebec</option>
              </select>
              <label htmlFor="city" className="details__label label">
                City
              </label>
              <input
                type="text"
                className="details__input"
                placeholder="Enter the City"
                id="city"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
              <label htmlFor="breed" className="details__label label">
                Breed
              </label>
              <select
                className="details__select"
                onChange={(e) => setBreed(e.target.value)}
                name="breed"
                id="breed"
                value={breed}
                required
              >
                <option value="Select">Please select the breed...</option>
                <option value="Maine Coon">Maine Coon</option>
                <option value="Persa">Persa</option>
                <option value="Ragdoll">Ragdoll</option>
                <option value="Brazilian Cat">Brazilian Cat</option>
              </select>
              <label htmlFor="description" className="details__label label">
                Description
              </label>
              <textarea
                type="text"
                className="details__textarea"
                placeholder="Please enter a description..."
                id="description"
                name="description"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                required
              />
              <div>
                <h2 className="details__subheader">Contact Information</h2>{" "}
              </div>
              <label htmlFor="name" className="details__label label">
                Contact Name
              </label>
              <input
                type="text"
                className="details__input"
                placeholder="Enter your full name"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label htmlFor="phone" className="details__label label">
                Phone Number
              </label>
              <input
                type="tel"
                className="details__input"
                placeholder="Enter the phone number"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />

              <label htmlFor="email" className="details__label label">
                Email
              </label>
              <input
                type="email"
                className="details__input"
                placeholder="Enter your email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <div className="details__header">
                <h2 className="details__subheader">Social Media Information</h2>
              </div>
              <label htmlFor="website" className="details__label label">
                Website
              </label>
              <input
                type="text"
                className="details__input"
                placeholder="Enter your website"
                id="website"
                name="website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
              <label htmlFor="facebook" className="details__label label">
                Facebook
              </label>
              <input
                type="text"
                className="details__input"
                placeholder="Enter the Facebook URL"
                id="facebook"
                name="facebook"
                value={facebook}
                onChange={(e) => setFacebook(e.target.value)}
              />
              <label htmlFor="instagram" className="details__label label">
                Instagram
              </label>
              <input
                type="text"
                className="details__input"
                placeholder="Enter the Instagram URL"
                id="instagram"
                name="instagram"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
              />
            </div>

            <div className="upload-photos__form">
              <div className="details__header">
                <h3 className="details__subheader">Upload Photos</h3>
              </div>
              <button
                type="button"
                className="save-btn upload"
                id="add-cattery"
              >
                + Add Photos
              </button>
            </div>
            <div className="upload-documents__form">
              <div className="details__header">
                <h3 className="details__subheader">Upload Documents</h3>
              </div>
              <button
                type="button"
                className="save-btn upload"
                id="add-cattery"
              >
                + Add Documents
              </button>
            </div>
          </div>
          <div className="buttons">
            <Link to="/admin" className="cancel-btn">
              Cancel
            </Link>
            <button type="submit" className="save-btn" id="add-cattery">
              + Add Cattery
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddCatt;
