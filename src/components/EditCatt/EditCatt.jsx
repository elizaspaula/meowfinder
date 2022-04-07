import "./EditCatt.scss";
import backArrow from "../../assets/icons/circle-chevron-left-solid.svg";
import { Link, useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function EditCatt() {
  const { id } = useParams();
  const { register, handleSubmit, setValue } = useForm({});
  const authToken = sessionStorage.getItem("authToken");
  const history = useHistory();
  const [picture, setPicture] = useState([]);
  const [document, setDocument] = useState([]);

  useEffect(() => {
    if (!authToken) {
      return history.push("/login");
    }
    axios
      .get(`${process.env.REACT_APP_API_URL}/catteries/${id}`)
      .then((results) => {
        setValue("catteryName", results.data.catteryName);
        setValue("address", results.data.address);
        setValue("country", results.data.country);
        setValue("province", results.data.province);
        setValue("city", results.data.city);
        setValue("breed", results.data.breed);
        setValue("registry", results.data.registry);
        setValue("description", results.data.description);
        setValue("name", results.data.name);
        setValue("phone", results.data.phone);
        setValue("email", results.data.email);
        setValue("website", results.data.website);
        setValue("facebook", results.data.facebook);
        setValue("instagram", results.data.instagram);
        setPicture(results.data.picture);
        setDocument(results.data.document);
      });
  }, []);

  const onSubmit = (data) => {
    const formData = new FormData();

    for (let [field, value] of Object.entries(data)) {
      console.log(field, value);

      if (field === "picture") {
        value.forEach((element) => {
          formData.append(field, element[0]);
        });
      } else if (field === "document") {
        formData.append(field, value[0]);
      } else {
        formData.append(field, value);
      }
    }

    axios
      .put(`${process.env.REACT_APP_API_URL}/admin/cattery/${id}`, formData, {
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
  console.log(picture);
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
          <h1 className="header-wrapper__text">Edit the Cattery</h1>
        </div>
        <form
          enctype="multipart/form-data"
          className="cattery-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="details__wrapper">
            <div className="details__container">
              <div className="details__form">
                <h2 className="details__subheader">Cattery Information</h2>{" "}
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
                  <option value="Alberta">Alberta</option>
                  <option value="British Columbia">British Columbia</option>
                  <option value="Manitoba">Manitoba</option>
                  <option value="New Brunswick">New Brunswick</option>
                  <option value="Newfoundland and Labrador">
                    Newfoundland and Labrador
                  </option>
                  <option value="Ontario">Ontario</option>
                  <option value="Nova Scotia">Nova Scotia</option>
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
                  <option value="Bengal">Bengal</option>
                  <option value="Persian">Persian</option>
                  <option value="Ragdoll">Ragdoll</option>
                  <option value="Savannah">Savannah</option>
                </select>
                <label htmlFor="registry" className="details__label label">
                  Registry
                </label>
                <select
                  className="details__select"
                  name="registry"
                  id="registry"
                  {...register("registry")}
                >
                  <option value="Select">Please select the registry...</option>
                  <option value="tica">TICA</option>
                  <option value="cfa">CFA</option>
                  <option value="gccf">GCCF</option>
                  <option value="acfa">ACFA</option>
                </select>
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
          <div className="details__container ">
            <label htmlFor="description" className="details__label label">
              Description
            </label>
            <textarea
              type="text"
              className="details__textarea__description "
              placeholder="Please enter a description..."
              id="description"
              name="description"
              {...register("description")}
            />
          </div>
          <div className="details__container">
            <h3 className="upload-form__subheader">Upload Photos</h3>
            <div className="file-upload">
              <input
                type="file"
                className="file-upload__input"
                {...register("picture[0]")}
              />
              <input
                type="file"
                className="file-upload__input"
                {...register("picture[1]")}
              />
              <input
                type="file"
                className="file-upload__input"
                {...register("picture[2]")}
              />
            </div>

            <div className="upload-form__photos">
              {picture?.map((photo) => (
                <img
                  className="upload-form__img"
                  src={`${process.env.REACT_APP_API_URL}/uploads/${photo}`}
                  alt={photo}
                />
              ))}
            </div>
            <h3 className="upload-form__subheader">Upload Documents</h3>
            <div className="file-upload">
              <input
                type="file"
                className="file-upload__input"
                {...register("document")}
              />
            </div>

            <div className="upload-form__documents">
              <a
                href={`${process.env.REACT_APP_API_URL}/uploads/${document}`}
                target="_blank"
                rel="noreferrer"
                className="upload-form__documents"
              >
                <p>Download: {document}</p>
              </a>
            </div>
          </div>

          <div className="buttons">
            <Link to="/admin" className="cancel-btn btn">
              Cancel
            </Link>
            <button type="submit" className="save-btn btn" id="add-cattery">
              + Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditCatt;
