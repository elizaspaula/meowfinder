import { Link } from "react-router-dom";
import catexemple from "../../assets/images/image0.jpeg";
import avatar from "../../assets/images/nomadsAvatar.png";
import "./CatteryList.scss";

function CatteryList({ catteryList }) {
  const list = (
    <ul className="cattery-list">
      {catteryList.map((cattery) => (
        <li>
          <Link to={`/catteries/${cattery.id}`} class="card" key={cattery.id}>
            <img src={catexemple} class="card__image" alt="" />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img class="card__thumb" src={avatar} alt="avatars" />
                <div class="card__header-text">
                  <h3 class="card__title">{cattery.catteryName}</h3>
                  <span class="card__status">{cattery.breed}</span>
                </div>
              </div>
              <p class="card__description">{cattery.description}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );

  return list;
}

export default CatteryList;
