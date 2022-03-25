import { Link } from "react-router-dom";
import "./CatteryList.scss";

function CatteryList({ catteryList }) {
  const list = (
    <ul className="cattery-list">
      {catteryList.map((cattery) => (
        <li className="cattery-list__item" key={cattery.id}>
          <div className="cattery-list__card">
            <Link
              to={`/catteries/${cattery.id}`}
              className="cattery-list__link link"
            >
              {cattery.catteryName}
            </Link>
            <p>{cattery.address}</p>
          </div>
        </li>
      ))}
    </ul>
  );

  return list;
}

export default CatteryList;
