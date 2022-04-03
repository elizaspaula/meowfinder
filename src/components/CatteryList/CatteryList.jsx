import { Link } from "react-router-dom";
import catexemple from "../../assets/images/image0.jpeg";
import "./CatteryList.scss";

function CatteryList({ catteryList }) {
  const list = (
    <ul className="cattery-list">
      {catteryList.map((cattery) => (
        <li>
          <Link to={`/catteries/${cattery.id}`} class="card" key={cattery.id}>
            <img
              src={
                cattery.picture?.[0]
                  ? `${process.env.REACT_APP_API_URL}/uploads/${cattery.picture?.[0]}`
                  : catexemple
              }
              class="card__image"
              alt="cat"
            />

            <div class="card__overlay">
              <div class="card__header">
                <div class="card__header-text">
                  <h3 class="card__title">{cattery.catteryName}</h3>
                  <span class="card__status">{cattery.breed}</span>
                </div>
              </div>
              <p class="card__description">{cattery.province}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );

  return list;
}

export default CatteryList;
