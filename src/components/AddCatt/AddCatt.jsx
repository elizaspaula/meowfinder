import "./AddCatt.scss";
import backArrow from "../../assets/icons/chevronleft.svg";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";

function AddCatt() {
  const authToken = sessionStorage.getItem("authToken");
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const onSubmit = (data) => {
    const formData = new FormData();

    for (let [field, value] of Object.entries(data)) {
      console.log(field, value);

      if (field === "picture" || field === "document") {
        value.forEach((element) => {
          formData.append(field, element[0]);
        });
      } else {
        formData.append(field, value);
      }
    }

    axios
      .post(`${process.env.REACT_APP_API_URL}/admin/cattery`, formData, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then(() => {
        history.push("/admin");
      })
      .catch((error) => {
        console.log(error);
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
          <h1 className="header-wrapper__text">Add a New Cattery</h1>
        </div>
        <form
          enctype="multipart/form-data"
          className="cattery-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="details__wrapper">
            <div className="details__container">
              <div className="details__form">
                <h2 className="details__subheader">Cattery Information</h2>
                <label htmlFor="catteryname" className="details__label label">
                  Cattery Name
                </label>
                <input
                  type="text"
                  className="details__input"
                  placeholder="Cattery Name"
                  id="catteryname"
                  name="catteryName"
                  {...register("catteryName")}
                />
                <label htmlFor="address" className="details__label label">
                  Address
                </label>
                <input
                  type="text"
                  className="details__input"
                  placeholder="Enter the address"
                  id="address"
                  name="address"
                  {...register("address")}
                />
                <label htmlFor="country" className="details__label label">
                  Country
                </label>
                <select className="details__select" name="country" id="country">
                  <option value="Canada">Canada</option>
                </select>
                <label htmlFor="province" className="details__label label">
                  Province
                </label>
                <select
                  className="details__select"
                  name="province"
                  id="province"
                  {...register("province")}
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
                  {...register("city")}
                />
                <label htmlFor="breed" className="details__label label">
                  Breed
                </label>
                <select
                  className="details__select"
                  name="breed"
                  id="breed"
                  {...register("breed")}
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
                  {...register("description")}
                />
              </div>
            </div>

            <div className="details__container">
              <div className="details__form">
                <h2 className="details__subheader">Contact Information</h2>{" "}
                <label htmlFor="name" className="details__label label">
                  Contact Name
                </label>
                <input
                  type="text"
                  className="details__input"
                  placeholder="Enter your full name"
                  id="name"
                  name="name"
                  {...register("name")}
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
                  {...register("phone")}
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
                  {...register("email")}
                />
                <div className="details__header">
                  <h2 className="details__subheader">
                    Social Media Information
                  </h2>
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
                  {...register("website")}
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
                  {...register("facebook")}
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
                  {...register("instagram")}
                />
              </div>
            </div>
          </div>

          <div className="details__container">
            <div className="upload-photos__form">
              <h3 className="details__subheader">Upload Photos</h3>
              <input
                type="file"
                className="save-btn upload"
                {...register("picture[0]")}
              />
              <input
                type="file"
                className="save-btn upload"
                {...register("picture[1]")}
              />
            </div>
            <div className="upload-documents__form">
              <h3 className="details__subheader">Upload Documents</h3>
              <input
                type="file"
                className="save-btn upload"
                {...register("document[0]")}
              />
              <input
                type="file"
                className="save-btn upload"
                {...register("document[1]")}
              />
            </div>
          </div>

          <div className="buttons">
            <Link to="/admin" className="cancel-btn">
              Cancel
            </Link>
            <button type="submit" className="save-btn" id="add-cattery">
              + Save Cattery
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddCatt;

//TO DO
//Upload Forms -- Ternary to display message if the there is a document/picture or not
