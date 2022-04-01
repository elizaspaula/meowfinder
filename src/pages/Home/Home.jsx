import "./Home.scss";
import hero from "../../assets/images/heronew.svg";
import searchBtn from "../../assets/icons/magnifying.svg";
import listIcon from "../../assets/icons/list_icon.svg";
import searchIcon from "../../assets/icons/search_icon.svg";
import connectIcon from "../../assets/icons/connect_icon.svg";
import HeaderHav from "../../components/HeaderNav/HeaderNav";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function Home() {
  const [province, setProvince] = useState(null);
  const [breed, setBreed] = useState(null);

  const history = useHistory();

  return (
    <>
      <HeaderHav firstLink="Home" secondLink="Listing" />
      <div className="home">
        <div className="hero">
          <h1 className="hero__title">
            {" "}
            The best way to find your perfect your Meow friend!{" "}
          </h1>
          <p className="hero__text">
            Meow Finder is an app for bringing ethical and registered breeders
            together.
          </p>
        </div>
        <div className="hero__img">
          <img className="hero__image" src={hero} alt="hero" />
        </div>
        <div className="search">
          <label htmlFor="breed" className="search__label label">
            Select the breed
          </label>
          <select
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            name="breed"
            id="breed"
            className="search__select"
          >
            <option value="Select">Select</option>
            <option value="Maine Coon">Maine Coon</option>
            <option value="Persa">Persa</option>
            <option value="Ragdoll">Ragdoll</option>
            <option value="Brazilian Cat">Brazilian Cat</option>
          </select>
          <label htmlFor="breed" className="search__label label">
            Select the province
          </label>
          <select
            name="province"
            id="province"
            className="search__select"
            value={province}
            onChange={(e) => setProvince(e.target.value)}
          >
            <option value="Select">Select</option>
            <option value="British Columbia">British Columbia</option>
            <option value="Alberta">Alberta</option>
            <option value="Manitoba">Manitoba</option>
            <option value="qb">Quebec</option>
          </select>
          <div className="search__button">
            <button
              className="search__btn"
              onClick={() => {
                history.push(`/search/${province}/${breed}`);
              }}
            >
              <p className="search__content-btn">Search</p>
              <img className="search__icon" src={searchBtn} alt="search icon" />
            </button>
          </div>
        </div>

        <div className="info">
          <h1 className="info__title">How it works?</h1>
          <div className="info__img">
            <img className="info__icon" src={listIcon} alt="list icon" />
          </div>
          <div className="info__img">
            <h2 className="info__subtitle">List</h2>
            <p className="info__text">
              Create your cattery profile for your pet
            </p>
          </div>
          <div className="info__img">
            <img className="info__icon" src={searchIcon} alt="search icon" />
          </div>
          <div>
            <h2 className="info__subtitle">Search</h2>
            <p className="info__text">
              Use our website to find exactly what you're looking for!
            </p>
          </div>
          <div className="info__img">
            <img className="info__icon" src={connectIcon} alt="rocket icon" />
          </div>
          <div>
            <h2 className="info__subtitle">Connect</h2>
            <p className="info__text">Connect with the registered breeders.</p>
          </div>
          <div className="info__links">
            <Link to="/signup" className="info__link">
              Create an account
            </Link>
            <p> or </p>
            <Link to="/login" className="info__link">
              Login
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
